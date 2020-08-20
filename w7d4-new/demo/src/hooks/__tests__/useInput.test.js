// https://react-hooks-testing-library.com/
import { renderHook, act } from '@testing-library/react-hooks';

// import the Hook
import useInput from '../useInput';

// starts with an initial input
test('should starts with an initial input', () => {
  const { result } = renderHook(() => useInput('Jake'))

  expect(result.current.inputValue).toBe('Jake')
})

// the input value is updateable
test('should input value is updateable', () => {
  const { result } = renderHook(() => useInput('Jake'))

  const fakeEvent = {
    target: { value: 'new fake' }
  }

  act(() => { result.current.onChange(fakeEvent) })


  expect(result.current.inputValue).toBe('new fake')
})















