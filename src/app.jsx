import React, { useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Controls } from './controls';
import { MediaStreamContext } from './media-stream-provider';
import { selectCurrentAudioOutput } from './selectors';
import { useMediaDevices } from './use-media-devices';

export const App = () => {
	useMediaDevices();

	const stream = useContext(MediaStreamContext);
	const videoReference = useRef();

	useEffect(() => {
		let video = videoReference.current;
		const onLoadedMetaData = () => {
			video.play();
		};
		if (stream) {
			video.addEventListener('loadedmetadata', onLoadedMetaData);
			video.srcObject = stream;
		}

		return () => {
			video.removeEventListener('loadedmetadata', onLoadedMetaData);
		};
	}, [stream]);

	const audioOutput = useSelector(selectCurrentAudioOutput);

	useEffect(() => {
		if (videoReference.current) {
			videoReference.current.setSinkId(audioOutput);
			console.log('set sink id');
		}
	}, [audioOutput]);

	return (
		<>
			<Controls />
			{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
			<video
				style={{ backgroundColor: 'black' }}
				width="600"
				height="300"
				ref={videoReference}
			/>
		</>
	);
};
