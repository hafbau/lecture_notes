// https://react-hooks-testing-library.com/
import { renderHook, act } from '@testing-library/react-hooks';
// import the hook
import useInput from '../useInput';

// should start with an initial value passed to it
test('should start with an initial value passed to it', () => {
  const initVal = 'hafiz';

  const { result } = renderHook(() => useInput(initVal))

  const value = result.current[0]

  expect(value).toBe(initVal);
})

// should return a function as the second element in array

// should be updateable with a new value from user
test('should be updateable with a new value from user', () => {
  const fakeEvent = { target: { value: 'this is sooo nu' }}

  const {
    result
  } = renderHook(() => useInput(''))

  const onChangeFunk = result.current[1]
  
  act(() => { onChangeFunk(fakeEvent) })

  const value = result.current[0]

  expect(value).toBe('this is sooo nu');
})
