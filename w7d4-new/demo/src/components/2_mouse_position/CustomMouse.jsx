import React, { useEffect, useState } from 'react'

const customMouseStyle = {
  height: 50,
  width: 50,
  borderRadius: '50%',
  border: '1px solid black',
  position: 'absolute'
};

export default function ShowMousePosition() {
  const [x, setX] = useState(0);
  const [y, setYCoord] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', event => {
      setX(event.clientX);
      setYCoord(event.clientY);
    });
    return () => {
      document.removeEventListener('mousemove');
    };
  }, []);

  return (
    <div style={{ ...customMouseStyle, top: y - 25, left: x - 25 }} />
  );
}
