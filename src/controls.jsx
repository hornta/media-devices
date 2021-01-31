import { DeviceControl } from './device-control';
import React from 'react';
import {
	selectAudioInput,
	selectAudioOutput,
	selectVideoInput,
} from './actions';
import {
	selectAudioInputs,
	selectAudioOutputs,
	selectCurrentAudioInput,
	selectCurrentAudioOutput,
	selectCurrentVideoInput,
	selectVideoInputs,
} from './selectors';
import { useDispatch } from 'react-redux';

export const Controls = () => {
	const dispatch = useDispatch();

	return (
		<div style={{ marginBottom: '1rem' }}>
			<div>
				<DeviceControl
					label="Camera"
					selector={selectVideoInputs}
					selectorCurrent={selectCurrentVideoInput}
					onChange={(deviceId) => {
						dispatch(selectVideoInput(deviceId));
					}}
				/>
			</div>
			<div>
				<DeviceControl
					label="Microphone"
					selector={selectAudioInputs}
					selectorCurrent={selectCurrentAudioInput}
					onChange={(deviceId) => {
						dispatch(selectAudioInput(deviceId));
					}}
				/>
			</div>
			<div>
				<DeviceControl
					label="Audio output"
					selector={selectAudioOutputs}
					selectorCurrent={selectCurrentAudioOutput}
					onChange={(deviceId) => {
						dispatch(selectAudioOutput(deviceId));
					}}
				/>
			</div>
		</div>
	);
};
