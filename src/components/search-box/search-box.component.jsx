import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => ( // Destrcturing 'props' as it came in single object
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
);