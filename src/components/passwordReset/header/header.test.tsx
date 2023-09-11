import React from "react";
import { render } from "@testing-library/react-native";
import Header from "./header";

describe("Header Component", () => {
  const headerProps = {
    title: "Test Title",
    logo: require("../path/to/test-image.png"),
    logoTop: 0,
    logoLeft: 0,
    logoPosition: "absolute" as "absolute" | "relative" | undefined, // Correct type assertion
    titleColor: "red",
    titleFontSize: 20,
    titleTop: 10,
    titleLeft: 10,
    titlePosition: "relative" as "absolute" | "relative" | undefined, // Correct type assertion
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<Header {...headerProps} />);

    // Check if the title text is rendered
    const titleElement = getByText(headerProps.title);
    expect(titleElement).toBeTruthy();

    // Check if the image is rendered
    const imageElement = getByTestId("header-logo");
    expect(imageElement).toBeTruthy();
  });
});
