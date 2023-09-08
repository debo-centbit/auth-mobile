import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ButtonProps } from "../types/interfaces";

const ButtonComponent: React.FC<ButtonProps> = ({
  borderRadius,
  top,
  left,
  position,
  children,
  color,
  bgColor,
  btnWidth,
  btnHeight,
  onPress,
  testID, // Add testID prop
}) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: borderRadius,
      borderColor: color,
      borderWidth: 1,
      backgroundColor: bgColor,
      width: btnWidth,
      height: btnHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    btnPosition: {
      position: position,
      top: top,
      left: left,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      style={{ ...styles.button, ...styles.btnPosition }}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
