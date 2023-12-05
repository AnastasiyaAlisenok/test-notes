import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from '../../store/Notes.slice';
import { RootState } from '../../store/store';
import ModalCustom from '../Modal/ModalCustom';

const NoteCreator = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes);

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => {
    setOpen(false);
    setTitle('');
    setDescription('');
    setErrorTitle(false);
    setErrorText(false);
  };

  const changeTitle = (value: string): void => {
    setTitle(value);
    setErrorTitle(false);
  };

  const changeText = (value: string): void => {
    setDescription(value);
    setErrorText(false);
  };

  const addNewNote = (): void => {
    if (title.length === 0) {
      setErrorTitle(true);
    } else if (description.length === 0) {
      setErrorText(true);
    } else {
      dispatch(addNotes({ title, text: description }));
      handleClose();
    }
  };
  console.log(notes);
  return (
    <>
      <TextField
        onClick={handleOpen}
        placeholder="Add note"
        sx={{ bgcolor: '#ffffff' }}
        InputProps={{
          endAdornment: <InputAdornment position="end">+</InputAdornment>,
        }}
      />
      <ModalCustom
        open={open}
        errorText={errorText}
        errorTitle={errorTitle}
        text={description}
        title={title}
        handleClick={addNewNote}
        handleClose={handleClose}
        changeTitle={changeTitle}
        changeText={changeText}
      />
    </>
  );
};

export default NoteCreator;
