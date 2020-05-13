import React from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handler = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoords({ x, y });
    };
    document.addEventListener('mousemove', handler);
    return () => { document.removeEventListener('mousemove', handler) }
  }, []);

  return coords;
};

export default useMousePosition;