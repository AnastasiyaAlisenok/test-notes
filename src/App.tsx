import './App.css';
import Header from './components/Header/Header';
import NoteCreator from './components/NoteCreator/NoteCreator';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <NoteCreator />
    </>
  );
};

export default App;
