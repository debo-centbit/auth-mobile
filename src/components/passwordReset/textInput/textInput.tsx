import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";

/**
 * A custom input component for text input.
 *
 * @param {object} props - The component's props.
 * @param {string} props.value - The current input value.
 * @param {string} props.placeholder - The input placeholder text.
 * @param {function} props.onChangeText - A callback function to handle text input changes.
 * @param {number} props.borderRadiusInput - The border radius of the input wrapper.
 * @param {string} props.inputBgColor - The background color of the input wrapper.
 * @param {"phone-pad" | "email-address" | undefined} props.keyboardType - The keyboard type for input.
 * @returns {JSX.Element} A custom text input component.
 */

interface InputProps extends TextInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  borderRadiusInput: number;
  inputBgColor: string;
  keyboardType: "phone-pad" | "email-address" | undefined;
}

const TextInputComponent: React.FC<InputProps> = ({
  value,
  placeholder,
  onChangeText,
  borderRadiusInput,
  inputBgColor,
  keyboardType,
}) => {
  return (
    <View
      style={[
        styles.input_wrapper,
        { backgroundColor: inputBgColor, borderRadius: borderRadiusInput },
      ]}>
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

/**
 * Styles for the TextInputComponent.
 */

const styles = StyleSheet.create({
  input_wrapper: {
    height: 58,
    fontWeight: "bold",
    minWidth: 305,
    fontFamily: "DM Sans",
    marginTop: 20,
    ...Platform.select({
      android: {
        elevation: 3,
        shadowColor: "black",
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
