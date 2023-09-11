import { ImageSourcePropType } from "react-native";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/**
 * A custom header component for displaying a title and logo.
 *
 * @param {object} props - The component's props.
 * @param {string} props.title - The title text to display.
 * @param {ImageSourcePropType} props.logo - The image source for the logo.
 * @param {number} props.logoTop - The top position of the logo.
 * @param {number} props.logoLeft - The left position of the logo.
 * @param {"absolute" | "relative" | undefined} props.logoPosition - The position style for the logo.
 * @param {string} props.titleColor - The color of the title text.
 * @param {number} props.titleFontSize - The font size of the title text.
 * @param {number} props.titleTop - The top position of the title text.
 * @param {number} props.titleLeft - The left position of the title text.
 * @param {"absolute" | "relative" | undefined} props.titlePosition - The position style for the title text.
 * @returns {JSX.Element} A custom header component.
 */

interface HeaderProps {
  title: string;
  logo: ImageSourcePropType;
  logoTop: number;
  logoLeft: number;
  logoPosition: "absolute" | "relative" | undefined;
  titleColor: string;
  titleFontSize: number;
  titleTop: number;
  titleLeft: number;
  titlePosition: "absolute" | "relative" | undefined;
}

const Header: React.FC<HeaderProps> = ({
  title,
  logo,
  logoTop,
  logoLeft,
  logoPosition,
  titleColor,
  titleFontSize,
  titleTop,
  titleLeft,
  titlePosition,
}) => {
  return (
    <>
      <Image
        source={logo}
        style={[{ top: logoTop, left: logoLeft, position: logoPosition }]}
      />
      <Text
        style={[
          styles.title,
          {
            color: titleColor,
            fontSize: titleFontSize,
            top: titleTop,
            left: titleLeft,
            position: titlePosition,
          },
        ]}>
        {title}
      </Text>
    </>
  );
};

/**
 * Styles for the Header component.
 */

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
});

export default Header;
