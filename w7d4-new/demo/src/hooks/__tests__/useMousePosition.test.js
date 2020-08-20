// https://react-hooks-testing-library.com/
import { renderHook, act } from '@testing-library/react-hooks';

// import the Hook
import useMousePosition from '../useMousePosition';

// returns an array of lenght 2
test('should return an array of lenght two', () => {
  const { result } = renderHook(() => useMousePosition())

  expect(result.current.length).toBe(2)
})

// returns x and y coords as integers
test('should return x and y coords of type integers', () => {
  const { result: { current: coords } } = renderHook(() => useMousePosition())
  const [x, y] = coords;
  expect(typeof x).toBe('number')
  expect(typeof y).toBe('number')
})

// it returns updated position on mouse move
test('should updated position on mouse move', () => {
  const event = new MouseEvent('mousemove', {
    clientX: 50,
    clientY: 200
  })

  const { result } = renderHook(() => useMousePosition())

  act(() => { document.dispatchEvent(event) });

  // const [x, y] = result.current;
  expect(result.current[0]).toBe(50)
  expect(result.current[1]).toBe(200)
})