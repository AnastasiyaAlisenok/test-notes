import { createSlice } from '@reduxjs/toolkit';

export type NotesType = {
  id: string;
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
    loadNotesFromDB: (state, action) => {
      return action.payload;
    },
  },
});

export const { actions, reducer } = notesSlice;

export const { addNotes, deleteNote, updateItem, loadNotesFromDB } =
  notesSlice.actions;
