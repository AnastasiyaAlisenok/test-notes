import { NotesType } from '../store/Notes.slice';

const addNoteToIndexedBD = (object: NotesType): void => {
  const request = indexedDB.open('notesDB', 1);
  request.onsuccess = (event): void => {
    const db = (event.target as IDBOpenDBRequest).result;
    const transaction = db.transaction(['notes'], 'readwrite');
    const objectStore = transaction.objectStore('notes');
    objectStore.add(object);
  };
};

export default addNoteToIndexedBD;
