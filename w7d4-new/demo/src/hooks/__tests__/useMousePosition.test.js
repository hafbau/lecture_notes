// https://react-hooks-testing-library.com/
import { renderHook, act } from '@testing-library/react-hooks';
// import the hook
import useMousePosition from '../useMousePosition';

// should return an array of length = 2
test('should return an array of length = 2', () => {
  const { result: { current } } = renderHook(() => useMousePosition())
  expect(current.length).toBe(2);
})
// should return x, y coord that are numbers
test('should return x, y coord that are numbers', () => {
  const {
    result: {
      current
    }
  } = renderHook(() => useMousePosition())
  const [x, y] = current;
  
  expect(typeof x).toBe('number');
  expect(typeof y).toBe('number');
})

// should track mouse movement on the document
test('should return x, y coord that are numbers', () => {
  const {
    result
  } = renderHook(() => useMousePosition())
  const event = new MouseEvent('mousemove', {
    clientX: 30,
    clientY: 70
  })

  act(() => { document.dispatchEvent(event) });

  const [x, y] = result.current;

  expect(x).toBe(30);
  expect(y).toBe(70);
})