import React from 'react';
import './search-box.styles.css';

//Functional Components no state, no lifecyclemethods
// React Destructure: props -> placeholder
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange} 
  />
 
)
