import { createSlice } from '@reduxjs/toolkit';

export type NotesType = {
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
    deleteNote: (state, action) => {
      return state.filter((val, i) => i !== action.payload);
    },
    updateItem: (state, action) => {
      const { index, data } = action.payload;
      state[index].title = data.title;
      state[index].text = data.text;
    },
  },
});

export const { actions, reducer } = notesSlice;

export const { addNotes, deleteNote, updateItem } = notesSlice.actions;
