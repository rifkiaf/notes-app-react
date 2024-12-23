import React from 'react';
import '../styles/style.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Cari Catatan..."
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;