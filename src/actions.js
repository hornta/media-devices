import { createAction } from '@reduxjs/toolkit';

export const updateMediaDevices = createAction('updateMediaDevices');
export const selectVideoInput = createAction('selectVideoInput');
export const selectAudioInput = createAction('selectAudioInput');
export const selectAudioOutput = createAction('selectAudioOutput');
