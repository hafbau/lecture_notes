import React from 'react'
import ShowMousePosition from './ShowMousePosition';
import MousePositionForColour from './MousePositionForColour';
import MousePositionForSize from './MousePositionForSize';
import CustomMouse from './CustomMouse';

export default function HasMousePosition() {
  return (
    <div>
      <ShowMousePosition />
      <MousePositionForColour />
      <MousePositionForSize />
      <CustomMouse />
    </div>
  );
}
