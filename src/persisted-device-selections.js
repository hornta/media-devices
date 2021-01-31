import {
	selectAudioInput,
	selectAudioOutput,
	selectVideoInput,
} from './actions';

const saveOnActionTypes = new Set([
	selectAudioInput.type,
	selectVideoInput.type,
	selectAudioOutput.type,
]);

const localStorageKey = 'selectedDevices';

export const getDeviceSelections = () => {
	const value = localStorage.getItem(localStorageKey);

	let selections;
	try {
		selections = JSON.parse(value);
	} catch {
		console.error('Reading bad data from local storage');
	}
	return selections;
};

export const localStorageMiddleware = ({ getState }) => (next) => (action) => {
	next(action);
	if (saveOnActionTypes.has(action.type)) {
		const { selectedDevices } = getState();
		localStorage.setItem(localStorageKey, JSON.stringify(selectedDevices));
	}
};
