import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ButtonComponent from "./ButtonComponent";
import * as Jest from "@testing-library/jest-native/extend-expect";
import { Position } from "../types/enums";

describe("ButtonComponent", () => {
  const mockPressHandler = jest.fn();

  const props = {
    testID: "test-button", // Add testID prop
    borderRadius: 10,
    top: 0,
    left: 0,
    position: Position.RELATIVE,
    borderColor: "red",
    color: "red",
    bgColor: "blue",
    borderWidth: 1,
    children: "Sign Up",
    btnHeight: 0,
    btnWidth: 0,
    onPress: mockPressHandler,
  };

  it("renders with correct props and styles", () => {
    const { getByTestId } = render(<ButtonComponent {...props} />);
    const button = getByTestId("test-button");

    expect(button).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 1,
    });

    expect(button).toHaveProp("style", {
      borderRadius: props.borderRadius,
      borderColor: props.borderColor,
      borderWidth: props.borderWidth,
      backgroundColor: props.bgColor,
      position: props.position,
      top: props.top,
      left: props.left,
      width: props.btnWidth,
      height: props.btnHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 1,
    });
    expect(button).toHaveProp("children", [...button.props.children]);

    expect(button.props.style).toEqual({
      borderRadius: props.borderRadius,
      borderColor: props.borderColor,
      borderWidth: props.borderWidth,
      backgroundColor: props.bgColor,
      position: props.position,
      top: props.top,
      left: props.left,
      width: props.btnWidth,
      height: props.btnHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 1,
    });
  });

  it("calls onPress handler when pressed", () => {
    const { getByTestId } = render(
      <ButtonComponent {...props}>Any Text</ButtonComponent>,
    );
    const button = getByTestId("test-button");

    fireEvent.press(button);

    expect(mockPressHandler).toHaveBeenCalledTimes(1);
  });
});
