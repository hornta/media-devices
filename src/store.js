import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { devicesReducer } from './devices-reducer';
import {
	getDeviceSelections,
	localStorageMiddleware,
} from './persisted-device-selections';
import { selectedDevicesReducer } from './selected-devices-reducer';

export const store = configureStore({
	reducer: combineReducers({
		devices: devicesReducer,
		selectedDevices: selectedDevicesReducer,
	}),
	preloadedState: {
		selectedDevices: getDeviceSelections() ?? undefined,
	},
	middleware: (getDefaultMiddleware) => {
		return [...getDefaultMiddleware(), localStorageMiddleware];
	},
});
