import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SignUpScreen from "./sign-up-screen";

describe("SignUpScreen", () => {
  it("renders correctly", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <SignUpScreen />,
    );

    // Check if "Sign Up" text is rendered
    expect(getByText("Sign Up")).toBeTruthy();

    // Check if form fields are rendered
    const firstNameInput = getByPlaceholderText("Enter first name");
    const lastNameInput = getByPlaceholderText("Enter last name");
    const phoneNumberInput = getByPlaceholderText("Enter phone number");
    const emailInput = getByPlaceholderText("Enter email address");
    const passwordInput = getByPlaceholderText("Enter your password");

    expect(firstNameInput).toBeTruthy();
    expect(lastNameInput).toBeTruthy();
    expect(phoneNumberInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();

    // Simulate user input in form fields
    fireEvent.changeText(firstNameInput, "John");
    fireEvent.changeText(lastNameInput, "Doe");
    fireEvent.changeText(phoneNumberInput, "1234567890");
    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "securepassword");

    // Check if buttons are rendered
    const backButton = getByTestId("test-button1");
    const signUpButton = getByTestId("test-button2");

    expect(backButton).toBeTruthy();
    expect(signUpButton).toBeTruthy();

    // Simulate button clicks
    fireEvent.press(signUpButton);
    fireEvent.press(backButton);
  });
});
