import { useSearchParams } from 'react-router-dom';
import {
  SearchButtonStyled,
  SearchFormStyled,
  SearchInputStyled,
} from './SearchBar.styled';
import { useState } from 'react';

export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [, setSearchParams] = useSearchParams();
  const onChange = e => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    if (searchQuery === '') {
      return alert('PLEASE, ENTER MOVIE NAME!');
    }

    setSearchParams({ query: searchQuery });
    // const onHandleSubmit = value => {
    //   setSearchParams({ query: value });
    // };
    setSearchQuery('');
  };

  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <SearchInputStyled
        type="text"
        name="movieName"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={searchQuery}
        onChange={onChange}
      />
      <SearchButtonStyled type="submit">Search</SearchButtonStyled>
    </SearchFormStyled>
  );
};
