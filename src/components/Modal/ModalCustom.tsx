import { Modal, Box, Button, Stack } from '@mui/material';
import { useRef, useEffect, useState, FormEvent } from 'react';
import { style, ColorButton, tagsContainer, field, tagStyle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addTag } from '../../store/Tags.slice';
import { colorText } from '../../utils/colorText';
import addRange from '../../utils/addRange';
import { addTagsToCommonStore } from '../../store/AllTags.slice';

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
        <Box
          sx={field}
          ref={divRef}
          onInput={handleInputChange}
          contentEditable={true}
          dangerouslySetInnerHTML={{ __html: tag }}
        ></Box>
        <Box sx={tagsContainer}>
          {tags &&
            tags.map((tag, index) => (
              <Box sx={tagStyle} key={index}>
                {tag}
              </Box>
            ))}
        </Box>
        <Stack
          flexDirection={'row'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          useFlexGap
          spacing={2}
        >
          <Button
            sx={{ color: '#f09a06', width: '8rem' }}
            onClick={() => {
              handleClose();
              clearTextField();
            }}
          >
            Chancel
          </Button>
          <ColorButton
            sx={{ width: '8rem' }}
            variant="contained"
            onClick={() => {
              handleClick();
              clearTextField();
              if (tag) {
                console.log(tag);
                dispatch(addTagsToCommonStore(tag));
              }
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
