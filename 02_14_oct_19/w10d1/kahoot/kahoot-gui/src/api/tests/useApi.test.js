import { renderHook, act } from "@testing-library/react-hooks";
import { useApi } from "../useApi";

// jest.mock('axios')
it("should return trigger function, err, loading and data of appropriate types", () => {
  const { result } = renderHook(() => useApi());
  const [triggerFn, err, loading, data] = result.current;

  expect(typeof triggerFn).toBe('function');
  expect(err).toBe(null);
  expect(data).toBe(null);
  expect(loading).toBe(true);
});

it("should call trigger function and update data", () => {
  const { result } = renderHook(() => useApi());

  act(() => {
    result.current[0]({
      crudType: 'GET_MANY'
    });
  });
  const data = result.current[3];
  expect(data).not.toBe(null);
  expect(data.fake).toBe('data');
});
