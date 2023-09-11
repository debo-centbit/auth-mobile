import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
  borderRadiusButton: number;
  buttonColor: string;
  buttonBgColor: string;
};

export default function Button({
  label,
  style,
  borderRadiusButton,
  buttonColor,
  buttonBgColor,
  ...touchableOpacityProps
}: Props) {
   
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity,{ backgroundColor: buttonBgColor, borderRadius: borderRadiusButton }, style]}
      {...touchableOpacityProps}>
      <Text style={[styles.labelText, { color: buttonColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    padding: 8,
    minWidth: 305,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20,
    ...Platform.select({
      android: {
        elevation: 3,
        shadowColor:"black", 
      },
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
    }),
  },
  labelText: {
    fontSize: 18,
    color:'#fff',
  },
});