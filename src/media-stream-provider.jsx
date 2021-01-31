import { createContext, useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCurrentAudioInput, selectCurrentVideoInput } from './selectors';

export const MediaStreamContext = createContext();
export const MediaStreamActionsContext = createContext();

export const MediaStreamProvider = ({ children }) => {
	const [mediaStream, setMediaStream] = useState();

	const videoId = useSelector(selectCurrentVideoInput);
	const audioId = useSelector(selectCurrentAudioInput);

	useEffect(() => {
		let wasCancelled = false;
		(async () => {
			const constraints = {
				audio: {
					deviceId: audioId ? { exact: audioId } : undefined,
				},
				video: {
					deviceId: videoId ? { exact: videoId } : undefined,
				},
			};
			console.log(constraints);
			const stream = await navigator.mediaDevices.getUserMedia(constraints);
			if (!wasCancelled) {
				setMediaStream(stream);
			}
		})();

		return () => {
			wasCancelled = true;
		};
	}, [videoId, audioId]);

	return (
		<MediaStreamContext.Provider value={mediaStream}>
			{children}
		</MediaStreamContext.Provider>
	);
};

MediaStreamProvider.propTypes = {
	children: PropTypes.any,
};
