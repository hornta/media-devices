import { createReducer } from '@reduxjs/toolkit';
import {
	selectAudioInput,
	selectAudioOutput,
	selectVideoInput,
	updateMediaDevices,
} from './actions';

const initialState = {
	audioInput: undefined,
	videoInput: undefined,
};

export const selectedDevicesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(selectAudioInput, (state, action) => {
			state.audioInput = action.payload;
		})
		.addCase(selectVideoInput, (state, action) => {
			state.videoInput = action.payload;
		})
		.addCase(selectAudioOutput, (state, action) => {
			state.audioOutput = action.payload;
		});
});
