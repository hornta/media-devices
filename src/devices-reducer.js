import { createReducer } from '@reduxjs/toolkit';
import { updateMediaDevices } from './actions';

const initialState = {
	audioInputs: [],
	audioOutputs: [],
	videoInputs: [],
};

export const devicesReducer = createReducer(initialState, (builder) => {
	builder.addCase(updateMediaDevices, (state, action) => {
		return action.payload;
	});
});
