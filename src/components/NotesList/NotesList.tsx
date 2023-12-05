import { List, ListItem, IconButton, ListItemText, Stack } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { listItemStyle, listStyle } from './style';
import Edit from '@mui/icons-material/Edit';
import { NotesType, deleteNote, updateItem } from '../../store/Notes.slice';
import ModalCustom from '../Modal/ModalCustom';

const NotesList = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();

  const handleOpen = (note: NotesType): void => {
    setOpen(true);
    setTitle(note.title);
    setDescription(note.text);
  };

  const handleClose = (): void => setOpen(false);

  const changeTitle = (value: string): void => {
    setTitle(value);
    setErrorTitle(false);
  };

  const changeText = (value: string): void => {
    setDescription(value);
    setErrorText(false);
  };

  const updateNote = (index: number): void => {
    const data: NotesType = {
      title: title,
      text: description,
    };
    if (title.length === 0) {
      setErrorTitle(true);
    } else if (description.length === 0) {
      setErrorText(true);
    } else {
      dispatch(updateItem({ index, data }));
      handleClose();
    }
  };

  return (
    <List dense={true} sx={listStyle}>
      {notes.map((note, index) => (
        <ListItem
          style={listItemStyle}
          key={index}
          secondaryAction={
            <Stack useFlexGap flexDirection={'row'} spacing={1}>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleOpen(note)}
              >
                <Edit />
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
          <ListItemText primary={note.title} />
          <ListItemText secondary={note.text} />
          <ModalCustom
            open={open}
            title={title}
            text={description}
            errorText={errorText}
            errorTitle={errorTitle}
            handleClose={handleClose}
            changeTitle={changeTitle}
            changeText={changeText}
            handleClick={() => updateNote(index)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default NotesList;
