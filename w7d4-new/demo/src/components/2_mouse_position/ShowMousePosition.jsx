import React, { useEffect, useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition'

export default function ShowMousePosition() {
  const [x, y] = useMousePosition()

  return (
    <h1>
      X: {x}, Y: {y}
    </h1>
  );
}
