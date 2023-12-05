import { TextField, Modal, Box, Button, Stack } from '@mui/material';
import { style, ColorButton } from './styles';
import styles from './ModalCustom.module.css';

interface ModalCustomPropsType {
  open: boolean;
  title: string;
  text: string;
  errorTitle: boolean;
  errorText: boolean;
  handleClose: () => void;
  changeTitle: (value: string) => void;
  changeText: (value: string) => void;
  handleClick: () => void;
}

const ModalCustom = (props: ModalCustomPropsType): JSX.Element => {
  const {
    open,
    handleClose,
    title,
    text,
    errorText,
    errorTitle,
    changeText,
    changeTitle,
    handleClick,
  } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          id="modal-modal-title"
          value={title}
          placeholder="Add title..."
          error={errorTitle}
          helperText={errorTitle ? 'Enter title!' : ''}
          onChange={(event) => {
            changeTitle(event.target.value);
          }}
        />
        <TextField
          id="modal-modal-description"
          placeholder="Add note text..."
          value={text}
          rows={5}
          error={errorText}
          helperText={errorText ? 'Enter description!' : ''}
          multiline
          onChange={(event) => {
            changeText(event.target.value);
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
            onClick={handleClick}
          >
            Add
          </ColorButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalCustom;
