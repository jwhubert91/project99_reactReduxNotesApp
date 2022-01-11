import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NewNoteInput from './NewNoteInput';
import { NotesState } from './notesReducer';
import { addNotes } from './actions';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state)=> state.notes
  );
  const dispatch = useDispatch()

  const addNote = (note: string) => {
    dispatch( addNotes(note) )
  }

  return (
    <>
      <NewNoteInput addNote={ addNote } />
      <hr />
      <ul>
        {notes.map((note, idx) => {
          return <li key={idx}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;
