import { NotesType } from '../store/Notes.slice';

const getNotesFromIndexedDB = (): Promise<NotesType[]> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('notesDB', 1);

    request.onsuccess = (event): void => {
      if (event.target) {
        const db = (event.target as IDBOpenDBRequest).result;
        const transaction = db.transaction(['notes'], 'readonly');
        const objectStore = transaction.objectStore('notes');
        const getAllNotes = objectStore.getAll();

        getAllNotes.onsuccess = (): void => {
          const notes = getAllNotes.result;
          resolve(notes);
        };

        getAllNotes.onerror = (): void => {
          reject(new Error('Failed to retrieve notes from IndexedDB'));
        };
      }
    };

    request.onerror = (): void => {
      reject(new Error('Failed to open IndexedDB'));
    };
  });
};

export default getNotesFromIndexedDB();
