const createIndexedDB = (): void => {
  const request = indexedDB.open('notesDB', 1);

  request.onupgradeneeded = (event): void => {
    if (event.target) {
      const db = (event.target as IDBOpenDBRequest).result;
      const objectStore = db.createObjectStore('notes', { keyPath: 'id' });
      objectStore.createIndex('text', 'text', { unique: false });
    }
  };
};

export default createIndexedDB;
