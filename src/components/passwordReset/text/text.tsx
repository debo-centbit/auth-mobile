import React from "react";
import { View, Text, Image, StyleSheet, TextComponent } from "react-native";

/**
 * A custom component for displaying password-related text.
 *
 * @param {object} props - The component's props.
 * @param {string} props.text - The text to display.
 * @returns {JSX.Element} A custom password text component.
 */

interface PasswordTextComponentProps {
  text: string;
}

const PasswordTextComponent: React.FC<PasswordTextComponentProps> = ({
  text,
}) => {
  return (
    <>
      <Text style={[styles.paragraph]}>{text}</Text>
    </>
  );
};

/**
 * Styles for the PasswordTextComponent component.
 */

const styles = StyleSheet.create({
  paragraph: {
    padding: 20,
    fontWeight: "bold",
  },
});

export default PasswordTextComponent;
