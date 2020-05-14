import React, { useEffect, useState } from 'react'

export default function ShowMousePosition() {
  const [x, setX] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", event => {
      setX(event.clientX);
    });
  }, []);

  return (
    <h1
      style={{
        fontSize: x
      }}
    >
      Woah Dynamic Sizing!
    </h1>
  );
}
