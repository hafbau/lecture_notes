import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [xCoord, setX] = useState(0);
  const [yCoord, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, []);

  return [xCoord, yCoord]
  // return { x: xCoord, y: yCoord }
}

export default useMousePosition;