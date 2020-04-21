import React from 'react';
import styled from 'styled-components';

// tagged template literal
const Header = styled.header`
  background-color: cornsilk;
  color: salmon;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  background: ${(props) => props.theme === 'dark' ? 'black' : 'white'};
  color: ${(props) => props.theme === 'dark' ? 'white' : 'black'};
`;
const Styled = () => {
  return (
    <>
      <Header>
        Styled
      </Header>
      <Paragraph theme="dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur aspernatur provident hic quia sint doloremque optio dolorem perspiciatis asperiores voluptatum fugit cumque sequi, mollitia incidunt. Voluptas explicabo non voluptatem.
        <span>This cascades!</span>
      </Paragraph>
      <Paragraph theme="light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur aspernatur provident hic quia sint doloremque optio dolorem perspiciatis asperiores voluptatum fugit cumque sequi, mollitia incidunt. Voluptas explicabo non voluptatem.
      </Paragraph>
    </>
  );
};

export default Styled;
