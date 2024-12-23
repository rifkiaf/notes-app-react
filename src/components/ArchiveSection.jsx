import React from 'react';
import NoteItem from './NoteItem';
import '../styles/style.css';

const ArchiveSection = ({ notes, deleteNote, archiveNote, showFormattedDate }) => {
  return (
    <div className="archiveSection">
      <h2>Catatan yang Diarsipkan</h2>
      {notes.length === 0 ? (
        <p>Tidak ada catatan yang diarsipkan</p>
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

export default ArchiveSection;