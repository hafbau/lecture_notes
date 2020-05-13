import {
  renderHook, act
} from '@testing-library/react-hooks';
import useMousePosition from '../useMousePosition';

test('should return an x key with an integer value', () => {
  const {
    result
  } = renderHook(() => useMousePosition());
  expect(result.current).toHaveProperty('x');
  expect(typeof result.current.x).toBe('number');
});

test('should return a y key with an integer value', () => {
  const {
    result
  } = renderHook(() => useMousePosition());
  expect(result.current).toHaveProperty('y');
  expect(typeof result.current.y).toBe('number');
});

test('should return a updated coords when mouse moves', () => {
  const event = new MouseEvent("mousemove", { clientX: 50, clientY: 100 })
  const {
    result
  } = renderHook(() => useMousePosition());

  act(() => { document.dispatchEvent(event) });
  
  expect(result.current.y).toBe(100);
  expect(result.current.x).toBe(50);
});