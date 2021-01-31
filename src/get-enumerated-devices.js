export const getEnumeratedDevices = async () => {
	const devices = {
		videoInputs: [],
		audioInputs: [],
		audioOutputs: [],
	};

	for (const {
		kind,
		label,
		deviceId,
	} of await navigator.mediaDevices.enumerateDevices()) {
		const device = { label, deviceId };
		if (kind === 'videoinput') {
			devices.videoInputs.push(device);
		} else if (kind === 'audiooutput') {
			devices.audioOutputs.push(device);
		} else {
			devices.audioInputs.push(device);
		}
	}

	return devices;
};
