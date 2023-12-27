import { useFetchSearch } from 'hooks/useFetchSearch';
import {
  SearchButtonStyled,
  SearchFormStyled,
  SearchInputStyled,
} from './SearchBar.styled';

export const Searchbar = () => {
  const submitQuery = e => {
    e.preventDefault();
    const queryValue = e.target.elements.query.value.trim().toLowerCase();
    console.log('queryValue', queryValue);
    if (queryValue === '') {
      return alert('PLEASE, ENTER MOVIE NAME!');
    }
    return queryValue;
  };

  return (
    <SearchFormStyled onSubmit={submitQuery}>
      <SearchInputStyled
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <SearchButtonStyled type="submit">Search</SearchButtonStyled>
    </SearchFormStyled>
  );
};
