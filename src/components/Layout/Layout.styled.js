import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;

  &.active {
    color: #4903fc;
  }
`;
