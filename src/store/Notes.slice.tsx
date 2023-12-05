import { createSlice } from '@reduxjs/toolkit';

type NotesType = {
  title: string;
  text: string;
};

const initialState: NotesType[] = [];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { actions, reducer } = notesSlice;

export const { addNotes } = notesSlice.actions;
