import React from 'react';
import { SearchWrapper, SearchInputContainer, SearchInput } from './style';

function SearchBar(props) {
  return (
    <SearchWrapper>
      <SearchInputContainer>
        <SearchInput placeholder='Search for Series/Shows' />
      </SearchInputContainer>
    </SearchWrapper>
  );
}

export default SearchBar;
