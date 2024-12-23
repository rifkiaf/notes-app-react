import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from './utils';
import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';
import SearchBar from './components/SearchBar';
import ArchiveSection from './components/ArchiveSection';
import './styles/style.css';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Personal Notes App</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <AddNoteForm addNote={addNote} />
      
      <NoteList
        notes={filteredNotes.filter(note => !note.archived)}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
        showFormattedDate={showFormattedDate}
      />
      
      <ArchiveSection
        notes={filteredNotes.filter(note => note.archived)}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
        showFormattedDate={showFormattedDate}
      />
    </div>
  );
};

export default App;