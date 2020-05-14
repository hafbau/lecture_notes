import { useEffect, useState } from 'react';


const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setYCoord] = useState(0);

  useEffect(() => {
    const handler = (event) => {
      setX(event.clientX);
      setYCoord(event.clientY);
    };
    document.addEventListener('mousemove', handler);
    return () => {
      document.removeEventListener('mousemove', handler)
    }
  }, []);

  return [x, y]; // {x, y}
}

export default useMousePosition;