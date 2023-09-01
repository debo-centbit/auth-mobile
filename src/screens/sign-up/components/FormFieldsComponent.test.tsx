import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FormFieldsComponent from "./FormFieldsComponent";

describe("FormFieldsComponent", () => {
  const fieldsConfig = [
    { name: "firstName", placeholder: "First Name" },
    { name: "lastName", placeholder: "Last Name" },
  ];

  const handleChangeMock = jest.fn();

  const userDetails = {
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    email: "jondoe@gmail.com",
    phoneNumber: "09086542159",
    password: "@2023miraclesHappen",
  };

  const borderRadius = 10;
  const marginTop = 10;

  it("renders correctly with provided props", () => {
    const { getAllByPlaceholderText } = render(
      <FormFieldsComponent
        fieldsConfig={fieldsConfig}
        handleChange={handleChangeMock}
        userDetails={userDetails}
        borderRadius={borderRadius}
        marginTop={marginTop}
      />,
    );

    const inputElements = getAllByPlaceholderText(/.*/); // Match any placeholder text
    expect(inputElements).toHaveLength(fieldsConfig.length);
  });

  it("calls handleChange when input value changes", () => {
    const { getByPlaceholderText } = render(
      <FormFieldsComponent
        fieldsConfig={fieldsConfig}
        handleChange={handleChangeMock}
        userDetails={userDetails}
        borderRadius={borderRadius}
        marginTop={marginTop}
      />,
    );

    const firstNameInput = getByPlaceholderText("First Name");
    fireEvent.changeText(firstNameInput, "New First Name");

    expect(handleChangeMock).toHaveBeenCalledWith(
      "firstName",
      "New First Name",
    );
  });
});
