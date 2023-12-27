import styled from 'styled-components';

// export const SearchbarStyled = styled.header`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 32px;
//   padding-right: 24px;
//   padding-left: 24px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;

export const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  /* width: 100%; */
  /* max-width: 350px; */
  /* background-color: grey; */
  /* border-radius: 3px;
  /* overflow: hidden; */
  /* padding: 0 4px 2px; */
`;

export const SearchInputStyled = styled.input`
  display: inline-block;
  width: 25%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: #ebeded;
  border-radius: 6px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    align-items: center;
  }
`;

export const SearchButtonStyled = styled.button`
  display: inline-block;
  border: 0;
  padding: 6px;
  /* opacity: 0.6; */
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  padding: 10px 2px;
  border-radius: 6px;
  background-color: #ebeded;
  margin-left: 15px;

  &:hover {
    opacity: 1;
    color: white;
    background-color: #474fed;
  }
`;
