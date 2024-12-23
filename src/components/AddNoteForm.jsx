import React, { useState } from 'react';
import '../styles/style.css';

const AddNoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [charCount, setCharCount] = useState(50);

  const handleTitleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 50) {
      setTitle(value);
      setCharCount(50 - value.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && body) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      addNote(newNote);
      setTitle('');
      setBody('');
      setCharCount(50);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addNoteForm">
      <h2>Tambah Catatan Baru</h2>
      <p>Sisa karakter: {charCount}</p>
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <textarea
        placeholder="Isi Catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default AddNoteForm;