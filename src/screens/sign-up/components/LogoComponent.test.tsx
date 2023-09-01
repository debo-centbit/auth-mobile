import React from "react";
import { render } from "@testing-library/react-native";
import LogoComponent from "./LogoComponent";
import { Position } from "../sign-up-screen";
import * as Jest from "@testing-library/jest-native/extend-expect";

describe("LogoComponent", () => {
  const mockProps = {
    imageUrl: "https://example.com/logo.png",
    logoWidth: 100,
    logoHeight: 50,
    logoPosition: Position.ABSOLUTE,
    logoTop: 20,
    logoLeft: 10,
    containerTestID: "logo-container",
    imageTestID: "logo-image",
  };

  it("renders correctly with provided props", () => {
    const { getByTestId } = render(<LogoComponent {...mockProps} />);
    const logoContainer = getByTestId(mockProps.containerTestID);
    const logoImage = getByTestId(mockProps.imageTestID);

    expect(logoContainer).toBeDefined();
    expect(logoImage).toBeDefined();

    // Check styles
    expect(logoContainer).toHaveStyle({
      position: mockProps.logoPosition,
      top: mockProps.logoTop,
      left: mockProps.logoLeft,
    });
    expect(logoImage).toHaveStyle({
      width: mockProps.logoWidth,
      height: mockProps.logoHeight,
    });
  });

  it("matches the snapshot", () => {
    const { toJSON } = render(<LogoComponent {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
