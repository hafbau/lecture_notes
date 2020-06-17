import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: tomato;
`;

const Paragraph = styled.p`
  background-color: ${(props) => (props.darkness > 9 ? "black" : "white")};
  color: ${(props) => (props.darkness < 5 ? "orange" : "teal")};
`;

const Styled = () => {
  return (
    <>
      <Header>
        <h1>Styled Components</h1>
      </Header>

      <Paragraph darkness={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab laborum
        omnis quaerat distinctio. Ea beatae amet natus eligendi iste. Delectus
        nobis eligendi amet officia in aspernatur fugiat dolore perspiciatis?
      </Paragraph>

      <Paragraph darkness={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab laborum
        omnis quaerat distinctio. Ea beatae amet natus eligendi iste. Delectus
        nobis eligendi amet officia in aspernatur fugiat dolore perspiciatis?
      </Paragraph>
    </>
  );
};

export default Styled;
