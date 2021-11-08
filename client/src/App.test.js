import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect"

import App from "./App";

describe("rendering tests", () => {
  test("Form title is present", () => {
    render(<App />);
    const formTitle = screen.getByText("Add New Event");
    expect(formTitle).toBeInTheDocument();
  });

  test("All form elements are rendered", () => {
    const { getByText } = render(<App />);
    const submitBtn = getByText("ADD NEW EVENT");
    const nameInput = getByText("First Name");
    const lastName = getByText("Last Name");
    const email = getByText("Email");
    const date = getByText("Event Date");
    expect(submitBtn).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
  test("Button is disabled", () => {
    const { getByTestId } = render(<App />);
    const submitBtn = getByTestId("submit-button");
    expect(submitBtn).toHaveClass("Mui-disabled");
  });
});
