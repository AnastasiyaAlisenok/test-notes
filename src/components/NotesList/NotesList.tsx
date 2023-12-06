import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { listStyle } from './style';

import NoteItem from '../NoteItem/NoteItem';

const NotesList = (): JSX.Element => {
  const notes = useSelector((state: RootState) => state.notes);
  const tags = useSelector((state: RootState) => state.tags);
  console.log(tags);

  return (
    <List dense={true} sx={listStyle}>
      {notes.map((note, index) => (
        <NoteItem key={index} index={index} note={note} />
      ))}
    </List>
  );
};

export default NotesList;
