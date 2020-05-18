import React, { useRef, useState } from 'react';

const UseRef = () => {
  const myRef = useRef();
  const [counter, setCounter] = useState(0);

  const countRef = useRef();
  countRef.current = counter;

  const clickHandler = () => {
    // Implement me
    myRef.current.focus();
  };

  const showAlert = () => {
    setTimeout(() => alert(countRef.current), 3000)
  }

  return (
    <div>
      <h1>Use Ref</h1>
      <div>
        <label htmlFor="input-field">Input Field:</label>
        <input id="input-field" type="text" ref={myRef} />
      </div>
      <div>
        <button type="button" onClick={clickHandler}>Click Me!</button>
      </div>

      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment!</button>
        <button onClick={showAlert}>Show Alert</button>
      </div>
    </div>
  );
};

export default UseRef;
