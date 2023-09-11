import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TextInputComponent from "./textInput";

describe("TextInputComponent", () => {
  const value = "Test Value";
  const placeholder = "Test Placeholder";
  const borderRadiusInput = 10;
  const inputBgColor = "blue";
  const keyboardType = "email-address";

  const onChangeText = jest.fn();

  it("renders the component with the correct props", () => {
    const { getByPlaceholderText } = render(
      <TextInputComponent
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        borderRadiusInput={borderRadiusInput}
        inputBgColor={inputBgColor}
        keyboardType={keyboardType}
      />,
    );

    // Check if the TextInput is rendered with the correct placeholder
    const textInput = getByPlaceholderText(placeholder);
    expect(textInput).toBeTruthy();
    expect(textInput.props.value).toBe(value);

    // Simulate text input change
    fireEvent.changeText(textInput, "New Test Value");
    expect(onChangeText).toHaveBeenCalledWith("New Test Value");

    // Check if the styles are applied correctly
    if (textInput.parent) {
      expect(textInput.parent.props.style).toEqual({
        backgroundColor: inputBgColor,
        borderRadius: borderRadiusInput,
      });
    }
  });
});
