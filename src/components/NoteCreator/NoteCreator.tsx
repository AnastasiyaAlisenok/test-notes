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
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  return (
    <>
      <TextField
        onClick={handleOpen}
        className={styles.noteCreator}
        placeholder="Add note"
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
            placeholder="Add title..."
          />
          <TextField
            id="modal-modal-description"
            placeholder="Add note text..."
            rows={5}
            multiline
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
            <ColorButton className={styles.button} variant="contained">
              Add
            </ColorButton>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default NoteCreator;
