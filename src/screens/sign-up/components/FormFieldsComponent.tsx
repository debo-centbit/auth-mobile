import React from "react";
import { TextInput, StyleSheet, FlatList } from "react-native";
import { FormFieldsProps } from "../types/interfaces";

const FormFieldsComponent: React.FC<FormFieldsProps> = ({
  fieldsConfig,
  handleChange,
  userDetails,
  borderRadius,
  marginTop,
}) => {
  const styles = StyleSheet.create({
    input: {
      width: 19.0625 * 16,
      height: 3.625 * 16,
      borderColor: "#fff",
      borderWidth: 1,
      paddingLeft: 1.56 * 16,
      backgroundColor: "#fff",
      marginTop: marginTop,
      borderRadius: borderRadius,
    },
  });

  return (
    <FlatList
      data={fieldsConfig}
      renderItem={({ item }) => (
        <TextInput
          key={item.name}
          onChangeText={(value) => handleChange(item.name, value)}
          placeholder={item.placeholder}
          style={styles.input}
          value={userDetails[item.name]}
        />
      )}
    />
  );
};

export default FormFieldsComponent;
