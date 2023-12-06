import { reducer as notesReducer } from './Notes.slice';
import { reducer as tagsReducer } from './Tags.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit/react';

const reducers = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
