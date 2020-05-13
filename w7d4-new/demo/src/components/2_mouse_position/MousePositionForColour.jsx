import React, { useEffect, useState } from 'react'

export default function ShowMousePosition() {
  const [x, setX] = useState(0);
  const [y, setYCoord] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", event => {
      setX(event.clientX);
      setYCoord(event.clientY);
    });
    return () => {
      document.removeEventListener("mousemove");
    };
  }, []);

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
