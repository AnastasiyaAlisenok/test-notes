import { useState } from 'react';
import {
  TextField,
  InputAdornment,
  Modal,
  Box,
  Button,
  Stack,
  styled,
  ButtonProps,
} from '@mui/material';
import styles from './NoteCreator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from '../../store/Notes.slice';
import { RootState } from '../../store/store';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#f09a06',
  '&:hover': {
    backgroundColor: '#fdbd4e',
  },
}));

const NoteCreator = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => {
    setOpen(false);
    setTitle('');
    setDescription('');
    setErrorTitle(false);
    setErrorText(false);
  };
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            className={styles.textField}
            id="modal-modal-title"
            value={title}
            placeholder="Add title..."
            error={errorTitle}
            helperText={errorTitle ? 'Enter title!' : ''}
            onChange={(event) => {
              setTitle(event.target.value);
              setErrorTitle(false);
            }}
          />
          <TextField
            id="modal-modal-description"
            placeholder="Add note text..."
            value={description}
            rows={5}
            error={errorText}
            helperText={errorText ? 'Enter description!' : ''}
            multiline
            onChange={(event) => {
              setDescription(event.target.value);
              setErrorText(false);
            }}
          />
          <Stack
            flexDirection={'row'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            useFlexGap
            spacing={2}
          >
            <Button
              className={styles.button}
              sx={{ color: '#f09a06' }}
              onClick={handleClose}
            >
              Chancel
            </Button>
            <ColorButton
              className={styles.button}
              variant="contained"
              onClick={addNewNote}
            >
              Add
            </ColorButton>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default NoteCreator;
