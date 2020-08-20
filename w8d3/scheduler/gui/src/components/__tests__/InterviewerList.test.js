import React from "react";

import { render, fireEvent } from "@testing-library/react";

import InterviewerList from "components/InterviewerList";

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

describe("InterviewerList", () => {
  it("calls onChange when an interviewer is clicked", () => {
    const onChange = jest.fn();
    const { getByAltText } = render(
      <InterviewerList interviewers={interviewers} onChange={onChange} />
    );

    fireEvent.click(getByAltText("Sylvia Palmer"));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
