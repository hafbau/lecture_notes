import React, { useEffect, useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition';

const customMouseStyle = {
  height: 50,
  width: 50,
  borderRadius: '50%',
  border: '1px solid black',
  position: 'absolute',
  backgroundImage: 'url("https://i.dlpng.com/static/png/6396612_preview.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function ShowMousePosition() {
  const [x, y] = useMousePosition();

  return (
    <div style={{ ...customMouseStyle, top: y - 25, left: x - 25 }} />
  );
}


