import { renderHook } from "@testing-library/react-hooks";

import useRealtimeUpdate from "hooks/useRealtimeUpdate";

import Server from "jest-websocket-mock";

describe("useRealtimeUpdate", () => {
  afterEach(() => {
    Server.clean();
  });

  it("connects to the WebSocket server and accepts a string message without dispatching", async () => {
    const server = new Server(process.env.REACT_APP_WEBSOCKET_URL);
    const dispatch = jest.fn();

    renderHook(() => useRealtimeUpdate(dispatch));

    await server.connected;

    server.send(JSON.stringify("notvalid"));

    expect(dispatch).toHaveBeenCalledTimes(0);
  });

  it("connects to the WebSocket server and accepts an interview update message to dispatch", async () => {
    const server = new Server(process.env.REACT_APP_WEBSOCKET_URL);
    const dispatch = jest.fn();

    renderHook(() => useRealtimeUpdate(dispatch));

    await server.connected;

    server.send(
      JSON.stringify({
        type: "SET_INTERVIEW",
        id: 1,
        interview: {
          student: "Lydia Miller-Jones",
          interviewer: 1
        }
      })
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: "SET_INTERVIEW",
      id: 1,
      interview: { student: "Lydia Miller-Jones", interviewer: 1 }
    });
  });
});
