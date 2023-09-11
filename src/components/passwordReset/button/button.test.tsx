import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Button from "./button"; 
// import SafeAreaContextMock from "react-native-safe-area-context/jest/mock";




// jest.mock("react-native-safe-area-context", () => SafeAreaContextMock);

describe("Button component", () => {
  it("renders the button with the correct label", () => {
    const label = "Click Me";

    const { getByText } = render(
      <Button
        label={label}
        borderRadiusButton={10}
        buttonColor="white"
        buttonBgColor="blue"
      />
    );

    const buttonLabel = getByText(label);

    expect(buttonLabel).toBeTruthy();
  });

  it("calls the onPress handler when clicked", () => {
    const label = "Click Me";
    const onPressMock = jest.fn();

    const { getByText } = render(
      <Button
        label={label}
        borderRadiusButton={10}
        buttonColor="white"
        buttonBgColor="blue"
        onPress={onPressMock}
      />
    );

    const buttonLabel = getByText(label);

    fireEvent.press(buttonLabel); // Assuming you have 'fireEvent' imported

    expect(onPressMock).toHaveBeenCalled();
  });
});
