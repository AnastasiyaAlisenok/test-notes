import { useRef, useState, FormEvent, useEffect } from 'react';
import { ListItem, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Save from '@mui/icons-material/Save';
import { listItemStyle, text } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { NotesType, deleteNote, updateItem } from '../../store/Notes.slice';
import colorText from '../../utils/colorText';
import { addTag } from '../../store/Tags.slice';
import addRange from '../../utils/addRange';
import { RootState } from '../../store/store';

interface INoteItemType {
  index: number;
  note: NotesType;
}

const NoteItem = (props: INoteItemType): JSX.Element => {
  const { index, note } = props;
  const [textItem, setTextItem] = useState(note.text);
  const [edit, setEdit] = useState(false);
  const itemRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    addRange(itemRef.current);
  }, [textItem]);

  const handleInputChange = (event: FormEvent<HTMLDivElement>): void => {
    const data = colorText(event);
    if (data) {
      setTextItem(data.inputText);
      setTextItem(data.coloredText);
      dispatch(addTag(data.inputText));
    }
  };

  const saveNote = (): void => {
    setEdit(false);
    const data = {
      text: textItem,
    };
    dispatch(updateItem({ index, data }));
  };

  return (
    <ListItem
      style={listItemStyle}
      key={index}
      secondaryAction={
        <Stack useFlexGap flexDirection={'row'} spacing={1}>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => (edit ? saveNote() : setEdit(true))}
          >
            {edit ? <Save /> : <Edit />}
          </IconButton>
          <IconButton
            onClick={() => dispatch(deleteNote(index))}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <div
        style={text}
        ref={itemRef}
        onInput={handleInputChange}
        onClick={handleInputChange}
        contentEditable={edit}
        dangerouslySetInnerHTML={{ __html: textItem }}
      ></div>
    </ListItem>
  );
};

export default NoteItem;
