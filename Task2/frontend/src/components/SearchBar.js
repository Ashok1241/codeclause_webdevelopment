import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery, onSearch }) => {
    return (
        <form onSubmit={onSearch} className="search-form">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Repositories..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
