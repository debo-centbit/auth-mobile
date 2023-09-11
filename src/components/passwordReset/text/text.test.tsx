import PasswordTextComponent from "./text";
import React from "react";
import { render } from "@testing-library/react-native";

describe("PasswordTextComponent", () => {
  const text = "Type in your new password";

  it("renders the component with the correct text", () => {
    const { getByText } = render(<PasswordTextComponent text={text} />);

    // Check if the text is rendered
    const textElement = getByText(text);
    expect(textElement).toBeTruthy();

    // Check if the styles are applied correctly
    expect(textElement.props.style).toEqual({
      padding: 20,
      fontWeight: "bold",
    });
  });
});
