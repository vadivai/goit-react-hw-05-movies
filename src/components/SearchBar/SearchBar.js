import { useSearchParams } from 'react-router-dom';
import {
  SearchButtonStyled,
  SearchFormStyled,
  SearchInputStyled,
} from './SearchBar.styled';
import { useState } from 'react';

export const Searchbar = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    onHandleSubmit(query);
    setQuery('');
  };

  const submitQuery = e => {
    e.preventDefault();

    const queryValue = e.target.elements.movieName.value.trim().toLowerCase();

    // console.log('queryValue', queryValue);

    if (queryValue === '') {
      return alert('PLEASE, ENTER MOVIE NAME!');
    }
    // searchParams.set('query', queryValue);
    // setSearchParams(searchParams);
  };

  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <SearchInputStyled
        type="text"
        name="movieName"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={query}
        onChange={onChange}
      />
      <SearchButtonStyled type="submit">Search</SearchButtonStyled>
    </SearchFormStyled>
  );
};
