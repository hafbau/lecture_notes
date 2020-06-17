import React, { useRef } from 'react';
import { useState } from 'react';

const UseRef = () => {
  const myRef = useRef();
  console.log('myRef :>> ', myRef);

  const [counter, setCounter] = useState(0)
  // const clickHandler = () => {
  //   // Implement me
  //   myRef.current.value = 'This is your value now'
  // };
  const countRef = useRef();
  countRef.current = counter;
  const showAlert = () => {
    setTimeout(() => {
      alert(`Counter is currently ${countRef.current}`)
    }, 3000)
  }

  return (
    <div>
      <h1>Use Ref</h1>

      {/* CLASSIC EXAMPLE */}
      {/* <div>
        <label htmlFor="input-field">Input Field:</label>
        <input id="input-field" type="text" ref={myRef} />
      </div>
      <div>
        <button type="button" onClick={clickHandler}>Click Me!</button>
      </div> */}

      {/* STALE STATE EXAMPLE */}
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment!</button>
        <button onClick={showAlert}>Show Alert</button>
      </div>
    </div>
  );
};

export default UseRef;
