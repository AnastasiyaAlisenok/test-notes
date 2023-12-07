import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addNotes } from '../../store/Notes.slice';
import ModalCustom from '../Modal/ModalCustom';

const NoteCreator = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => {
    setOpen(false);
    setDescription('');
  };

  const addNewNote = (): void => {
    if (description.length > 0) {
      dispatch(addNotes({ id: crypto.randomUUID(), text: description }));
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
