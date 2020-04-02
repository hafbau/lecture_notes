import React from "react";

import { render } from "@testing-library/react";

import Appointment from "components/Appointment";

describe("Appointment", () => {
  const interview = {
    student: "Lydia Miller-Jones",
    interviewer: {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  };

  it("renders without crashing when the mode is SHOW but the value of interview is null", () => {
    const { getByText, rerender } = render(
      <Appointment interview={interview} />
    );

    expect(getByText("Lydia Miller-Jones")).toBeInTheDocument();

    rerender(<Appointment interview={null} />);
  });

  it("transitions correctly when the mode is SHOW but the value of interview is null", () => {
    const { getByText, getByAltText, rerender } = render(
      <Appointment interview={interview} />
    );

    expect(getByText("Lydia Miller-Jones")).toBeInTheDocument();

    rerender(<Appointment interview={null} />);

    expect(getByAltText("Add")).toBeInTheDocument();
  });

  it("transitions correctly when the mode is EMPTY but the value interview is not null", () => {
    const { getByText, getByAltText, rerender } = render(
      <Appointment interview={null} />
    );

    expect(getByAltText("Add")).toBeInTheDocument();

    rerender(<Appointment interview={interview} />);

    expect(getByText("Lydia Miller-Jones")).toBeInTheDocument();
  });
});
