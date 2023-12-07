import { createSlice } from '@reduxjs/toolkit';

export type NotesType = {
  id: number;
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
      return state.filter((note) => note.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, data } = action.payload;
      state.forEach((note) => {
        if (note.id === id) {
          note.text = data.text;
        }
      });
    },
  },
});

export const { actions, reducer } = notesSlice;

export const { addNotes, deleteNote, updateItem } = notesSlice.actions;
