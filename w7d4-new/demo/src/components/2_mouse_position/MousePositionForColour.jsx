import React, { useEffect, useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition';

export default function ShowMousePosition() {
  const [x, y] = useMousePosition();

  return (
    <h1
      style={{
        color: `rgb(${x}, ${y}, 100)`
      }}
    >
      Randomizing Colo(u)rs. Woooah!
    </h1>
  );
}
