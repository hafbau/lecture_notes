import React from 'react';

// takes a default value
// return current value and a function that can change the value base on user typing

const useInput = (defaultValue) => {
  const [value, setVal] = React.useState(defaultValue)

  const handleChange = (ev) => {
    const { target: { value } } = ev;
    setVal(value)
  }

  return [value, handleChange];
}

export default useInput;