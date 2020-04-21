import React from 'react'
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';

const titleStyles = {
  'Routing': {
    color: 'red',
    background: 'whitesmoke'
  }
}

const StyledHeader = styled.h1`
  background: ${({ title }) => titleStyles[title].background };
  color: ${({ title }) => titleStyles[title].color };
  position: sticky;
  top: 0;
  margin: 0;
  height: 100px;
  line-height: 2.5;
`;

const Header = ({ title }) => {
  const match = useRouteMatch()
  return (
    <StyledHeader title={title}>
      {title} >> {match.url}
    </StyledHeader>
  )
}

export default Header
