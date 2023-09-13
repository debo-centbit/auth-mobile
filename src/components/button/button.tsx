import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'; 

type Props = TouchableOpacityProps & {
  variant: 'back' | 'login'; 
  label: 'Back' | 'Login';
  icon: string;
  buttonColor?: string; 

};

export default function Button({
  label,
  variant,
  icon,
  style,
  buttonColor,
  ...touchableOpacityProps
}: Props) {
  const isBackButton = variant === 'back';
  const containerStyle = [
    styles.touchableOpacity,
    isBackButton ? styles.backButtonStyle : styles.loginButtonStyle,
    style,
    { backgroundColor: buttonColor },
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      {...touchableOpacityProps}
    >
      {isBackButton ? (
        <Icon name={icon} size={24} color="white" />
      ) : (
        <Text style={styles.labelText}>
          {label} <Text> </Text>
          <Icon name={icon} size={24} color="white" />
        </Text>
      )}
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  touchableOpacity: {
    minWidth: 50,
    minHeight: 40,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  backButtonStyle: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'rgb(53,183,243)',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  loginButtonStyle: {
    backgroundColor: "rgb(53,183,243)", 
    borderRadius: 20, 
    width: 250, 
    height: 50,
  },
  labelText: {
    fontSize: 19,
    color: "#ffff",
  },
});
