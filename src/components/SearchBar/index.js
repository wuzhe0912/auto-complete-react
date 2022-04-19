import React from 'react';
import { SearchWrapper } from './style';

function SearchBar() {
  return (
    <SearchWrapper>
      <input type='text' placeholder='Search' />
    </SearchWrapper>
  );
}

export default SearchBar;
