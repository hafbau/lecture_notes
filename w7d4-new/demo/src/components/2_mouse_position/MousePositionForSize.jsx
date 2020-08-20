import React, { useEffect, useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition';

export default function ShowMousePosition() {
  const coords = useMousePosition();

  return (
    <h1
      style={{
        fontSize: coords[1]
      }}
    >
      Woah Dynamic Sizing!
    </h1>
  );
}
