import { reducer as notesReducer } from './Notes.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit/react';

const reducers = combineReducers({
  notes: notesReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
