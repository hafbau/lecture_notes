import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  color: white;
  background-color: tomato;
`;

const Paragraph = styled.p`
  margin-top: 40px;
  background-color: ${props => props.darkMode ? 'black' : 'white'};
  color: ${props => props.darkMode ? 'orange' : 'teal'};
`;
const Styled = () => {
  return (
    <div>
      <h1>Styled Components</h1>
      <Header>This is the header styled component</Header>
      <Paragraph darkMode >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eum voluptates asperiores quaerat itaque officia in et iure minus, unde fugit architecto eius earum, ipsam facere temporibus eveniet voluptate consectetur.
        <strong>Thhis is too strong ... Im</strong>
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eum voluptates asperiores quaerat itaque officia in et iure minus, unde fugit architecto eius earum, ipsam facere temporibus eveniet voluptate consectetur.
      </Paragraph>
    </div>
  );
};

export default Styled;
