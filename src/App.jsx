import React, { useContext, useEffect, useRef, useState } from 'react';
import { Controls } from './controls';
import { MediaStreamContext } from './media-stream-provider';
import { useMediaDevices } from './use-media-devices';

export const App = () => {
	useMediaDevices();

	const stream = useContext(MediaStreamContext);
	const [started, setStarted] = useState(Boolean(stream));
	const videoReference = useRef();

	// useEffect(() => {
	// 	function handleConnection(event) {
	// 		const peerConnection = event.target;

	// 		if (event.candidate) {
	// 			const newIceCandidate = new RTCIceCandidate(iceCandidate);
	// 			const otherPeer = getOtherPeer(peerConnection);

	// 			otherPeer
	// 				.addIceCandidate(newIceCandidate)
	// 				.then(() => {
	// 					handleConnectionSuccess(peerConnection);
	// 				})
	// 				.catch((error) => {
	// 					handleConnectionFailure(peerConnection, error);
	// 				});

	// 			trace(
	// 				`${getPeerName(peerConnection)} ICE candidate:\n` +
	// 					`${event.candidate.candidate}.`,
	// 			);
	// 		}
	// 	}

	// 	const rtcConfiguration = {
	// 		iceServers: ['stun.l.google.com:19302'],
	// 	};
	// 	const localPeerConnection = new RTCPeerConnection(rtcConfiguration);
	// 	localPeerConnection.addEventListener('icecandidate', handleConnection);
	// 	localPeerConnection.addEventListener(
	// 		'iceconnectionstatechange',
	// 		handleConnectionChange,
	// 	);
	// }, [started]);

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

	return (
		<>
			<Controls />
			{/* <button disabled={!stream}>join!</button> */}
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
