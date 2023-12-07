import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { listStyle } from './style';
import { useState, useCallback, useMemo } from 'react';

import NoteItem from '../NoteItem/NoteItem';
import FiltPerTags from '../FiltrPerTags/FiltrPerTags';
import { NotesType } from '../../store/Notes.slice';

const NotesList = (): JSX.Element => {
  const notes = useSelector((state: RootState) => state.notes);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filterNotes = useCallback(
    (selectedTags: string[]) => {
      if (selectedTags.length > 0) {
        const arr: NotesType[] = [];
        notes.forEach((note) =>
          selectedTags.forEach((tag) => {
            if (note.text.includes(tag)) {
              arr.push(note);
            }
          })
        );
        return arr;
      } else {
        return notes;
      }
    },
    [notes]
  );

  const filteredNotes = useMemo(
    () => filterNotes(selectedTags),
    [filterNotes, selectedTags]
  );

  return (
    <>
      <FiltPerTags
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <List dense={true} sx={listStyle}>
        {filteredNotes.map((note, index) => (
          <NoteItem key={index} note={note} />
        ))}
      </List>
    </>
  );
};

export default NotesList;
