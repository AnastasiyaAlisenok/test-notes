import { reducer as notesReducer } from './Notes.slice';
import { reducer as tagsReducer } from './Tags.slice';
import { reducer as allTagsReducer } from './AllTags.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit/react';

const reducers = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
  allTags: allTagsReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
