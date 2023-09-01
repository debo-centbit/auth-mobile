import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Position } from "../sign-up-screen";

interface LogoProps {
  imageUrl: string;
  logoWidth: number;
  logoHeight: number;
  logoPosition: Position;
  logoTop: number;
  logoLeft: number;
  containerTestID: string;
  imageTestID: string;
}

const LogoComponent: React.FC<LogoProps> = ({
  imageUrl,
  logoHeight,
  logoWidth,
  logoPosition,
  logoTop,
  logoLeft,
  containerTestID,
  imageTestID,
}) => {
  const styles = StyleSheet.create({
    logoContainer: {
      width: "fit-content",
      height: "fit-content",
      position: logoPosition,
      top: logoTop,
      left: logoLeft,
    },
    logo: {
      width: logoWidth,
      height: logoHeight,
    },
  });

  return (
    <View style={styles.logoContainer} testID={containerTestID}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.logo}
        testID={imageTestID}
      />
    </View>
  );
};

export default LogoComponent;
