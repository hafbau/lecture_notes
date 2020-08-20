import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] =  useState(initialValue)
  
  const onChange = (evt) => {
    const newVal = evt.target.value;
    setValue(newVal)
  }

  return { inputValue: value, onChange }
}

export default useInput;