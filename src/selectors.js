export const selectAudioInputs = (state) => {
	return state.devices.audioInputs;
};
export const selectAudioOutputs = (state) => {
	return state.devices.audioOutputs;
};
export const selectVideoInputs = (state) => {
	return state.devices.videoInputs;
};
export const selectCurrentVideoInput = (state) => {
	return state.selectedDevices.videoInput;
};
export const selectCurrentAudioInput = (state) => {
	return state.selectedDevices.audioInput;
};
export const selectCurrentAudioOutput = (state) => {
	return state.selectedDevices.audioOutput;
};
