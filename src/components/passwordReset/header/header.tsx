import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ImageSourcePropType } from "react-native";

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

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
});

export default Header;
