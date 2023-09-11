import React from "react";
import { View, Text, Image, StyleSheet, TextComponent } from "react-native";

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

const styles = StyleSheet.create({
  paragraph: {
    padding: 20,
    fontWeight: "bold",
  },
});

export default PasswordTextComponent;
