import { useRef, useState, FormEvent, useEffect } from 'react';
import { ListItem, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Save from '@mui/icons-material/Save';
import { listItemStyle, text } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { NotesType, deleteNote, updateItem } from '../../store/Notes.slice';
import { colorText, colorTextString } from '../../utils/colorText';
import { addTag } from '../../store/Tags.slice';
import addRange from '../../utils/addRange';
import { RootState } from '../../store/store';
import {
  addTagsToCommonStore,
  deleteTagsFromCommonStore,
} from '../../store/AllTags.slice';
import updateNoteInIndexedDB from '../../indexedDB/updateNoteInIndexedDB';
import deleteNoteFromIndexedDB from '../../indexedDB/deleteNoteFromIndexedDB';

interface INoteItemType {
  note: NotesType;
}

const NoteItem = (props: INoteItemType): JSX.Element => {
  const { note } = props;
  const coloredText = colorTextString(note.text).coloredText;
  const [textItem, setTextItem] = useState(coloredText);
  const [edit, setEdit] = useState(false);
  const itemRef = useRef(null);
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.tags);

  useEffect(() => {
    addRange(itemRef.current);
  }, [textItem]);

  useEffect(() => {
    setTextItem(coloredText);
    dispatch(addTagsToCommonStore(coloredText));
  }, [coloredText, dispatch]);

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
      id: note.id,
      text: textItem,
    };
    dispatch(updateItem({ index: note.id, data }));
    updateNoteInIndexedDB(data);
    if (tags) {
      dispatch(addTagsToCommonStore(tags));
    }
  };

  const deleteNotes = (): void => {
    dispatch(deleteNote(note.id));
    deleteNoteFromIndexedDB(note.id);
    dispatch(deleteTagsFromCommonStore(textItem));
  };

  const editNote = (): void => {
    setEdit(true);
    if (itemRef.current) {
      (itemRef.current as HTMLInputElement)?.focus();
    }
  };

  return (
    <ListItem
      sx={listItemStyle}
      key={note.id}
      secondaryAction={
        <Stack useFlexGap flexDirection={'column'} spacing={1}>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => (edit ? saveNote() : editNote())}
          >
            {edit ? <Save /> : <Edit />}
          </IconButton>
          <IconButton onClick={deleteNotes} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <div
        style={text}
        ref={itemRef}
        onInput={handleInputChange}
        onClick={(e) => e.preventDefault()}
        onFocus={handleInputChange}
        contentEditable={edit}
        dangerouslySetInnerHTML={{ __html: textItem }}
      ></div>
    </ListItem>
  );
};

export default NoteItem;
