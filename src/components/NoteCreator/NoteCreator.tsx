import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ModalCustom from '../Modal/ModalCustom';
import { RootState } from '../../store/store';
import createIndexedDB from '../../indexedDB/createIndexedDB';
import addNoteToIndexedBD from '../../indexedDB/addNoteToIndexedDB';
import { addNotes } from '../../store/Notes.slice';

const NoteCreator = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => {
    setOpen(false);
    setDescription('');
  };

  const addNewNote = (): void => {
    if (description.length > 0) {
      const newNote = { id: crypto.randomUUID(), text: description };
      if (notes.length === 0) {
        createIndexedDB();
      }
      addNoteToIndexedBD(newNote);
      dispatch(addNotes(newNote));
      handleClose();
    }
  };

  return (
    <>
      <TextField
        onClick={handleOpen}
        placeholder="Add note"
        sx={{
          bgcolor: '#ffffff',
          marginBottom: '40px',
          width: '25rem',
          borderRadius: '5px',
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">+</InputAdornment>,
        }}
      />
      <ModalCustom
        open={open}
        handleClick={addNewNote}
        handleClose={handleClose}
        changeText={(e) => setDescription(e)}
      />
    </>
  );
};

export default NoteCreator;
