import React from 'react';
import NoteItem from './NoteItem';
import '../styles/style.css';

const NoteList = ({ notes, deleteNote, archiveNote, showFormattedDate }) => {
  return (
    <div className="noteList">
      <h2>Catatan Aktif</h2>
      {notes.length === 0 ? (
        <p>Tidak ada catatan aktif</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
            showFormattedDate={showFormattedDate}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;