import './App.css';
import Header from './components/Header/Header';
import NoteCreator from './components/NoteCreator/NoteCreator';
import NotesList from './components/NotesList/NotesList';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <NoteCreator />
      <NotesList />
    </>
  );
};

export default App;
