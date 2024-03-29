// components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
