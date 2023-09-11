import React from "react";
import { KeyboardTypeOptions, Platform, StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  borderRadiusInput: number;
  inputBgColor: string;
  keyboardType: 'phone-pad'| 'email-address'| undefined;
}

const TextInputComponent: React.FC<InputProps> = ({
  value,
  placeholder,
  onChangeText,
  borderRadiusInput,
  inputBgColor,
  keyboardType
}) => {
  return (
    <View style={[styles.input_wrapper, {backgroundColor: inputBgColor, borderRadius: borderRadiusInput} ]}>
      <TextInput
        editable
        keyboardType={keyboardType}
        value={value}
        onChangeText={(value) => onChangeText(value)}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_wrapper: {
    height: 58,
  fontWeight: "bold",
    minWidth: 305,
    fontFamily: "DM Sans",
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
            height: 1,
          },
        },
      }),
  },
  input: {
    padding: 20,
  },
});

export default TextInputComponent;
