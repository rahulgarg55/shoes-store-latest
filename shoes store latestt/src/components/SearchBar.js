// SearchBar.js
import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Implement search functionality
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search shoes"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
