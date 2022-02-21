import InputField from "./InputField.js";
import { render } from "@testing-library/react";

describe("test for input field component", () => {
  test("check whether the input field exists in the document", () => {
    const { getByTestId } = render(<InputField />);
    const actual = getByTestId("input-field");
    expect(actual).toBeInTheDocument();
  });
});
