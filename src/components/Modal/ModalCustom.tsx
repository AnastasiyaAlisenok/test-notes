import { Modal, Box, Button, Stack } from '@mui/material';
import { useRef, useEffect, useState, FormEvent } from 'react';
import { style, ColorButton } from './styles';
import styles from './ModalCustom.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addTag } from '../../store/Tags.slice';
import colorText from '../../utils/colorText';
import addRange from '../../utils/addRange';

interface ModalCustomPropsType {
  open: boolean;
  changeText: (value: string) => void;
  handleClose: () => void;
  handleClick: () => void;
}

const ModalCustom = (props: ModalCustomPropsType): JSX.Element => {
  const { open, handleClose, changeText, handleClick } = props;
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.tags.hashtagWords);
  const divRef = useRef(null);

  useEffect(() => {
    addRange(divRef.current);
  }, [tag]);

  const handleInputChange = (event: FormEvent<HTMLDivElement>): void => {
    const data = colorText(event);
    if (data) {
      changeText(data.inputText);
      setTag(data.coloredText);
      dispatch(addTag(data.inputText));
    }
  };

  const clearTextField = (): void => {
    if (divRef.current) {
      (divRef.current as HTMLDivElement).innerHTML = '';
      setTag('');
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          className={styles.field}
          ref={divRef}
          onInput={handleInputChange}
          contentEditable={true}
          dangerouslySetInnerHTML={{ __html: tag }}
        ></div>
        <div className={styles.tagsContainer}>
          {tags &&
            tags.map((tag, index) => (
              <span className={styles.tag} key={index}>
                {tag}
              </span>
            ))}
        </div>
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
            onClick={() => {
              handleClose();
              clearTextField();
            }}
          >
            Chancel
          </Button>
          <ColorButton
            className={styles.button}
            variant="contained"
            onClick={() => {
              handleClick();
              clearTextField();
            }}
          >
            Add
          </ColorButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalCustom;
