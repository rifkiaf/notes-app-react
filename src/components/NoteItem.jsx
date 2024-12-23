import React from 'react';
import '../styles/style.css';

const NoteItem = ({ note, deleteNote, archiveNote, showFormattedDate }) => {
  return (
    <div className="noteItem">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <small>{showFormattedDate(note.createdAt)}</small>
      <div className="actions">
        <button className="delete" onClick={() => deleteNote(note.id)}>Hapus</button>
        <button className="archive" onClick={() => archiveNote(note.id)}>
          {note.archived ? 'Pindahkan ke Aktif' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;