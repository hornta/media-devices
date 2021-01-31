import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateMediaDevices } from './actions';
import { getEnumeratedDevices } from './get-enumerated-devices';
import { MediaStreamContext } from './media-stream-provider';

export const useMediaDevices = () => {
	const dispatch = useDispatch();
	const mediaStreamContext = useContext(MediaStreamContext);

	useEffect(() => {
		let wasCancelled = false;

		const fetchDevicesAsync = async () => {
			const devices = await getEnumeratedDevices();
			if (!wasCancelled) {
				dispatch(updateMediaDevices(devices));
			}
		};
		fetchDevicesAsync();

		const onDeviceChange = async () => {
			fetchDevicesAsync();
		};

		navigator.mediaDevices.addEventListener('devicechange', onDeviceChange);

		return () => {
			wasCancelled = true;
			navigator.mediaDevices.removeEventListener(
				'devicechange',
				onDeviceChange,
			);
		};
	}, [dispatch, mediaStreamContext]);
};
