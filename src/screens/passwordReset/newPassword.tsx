import React, { useEffect, useState } from "react";
import { ImageSourcePropType, View, Text } from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";
import Button from "../../components/passwordReset/button/button";
import TextInputComponent from "~components/passwordReset/textInput";
import Header from "../../components/passwordReset/header/header";
import PasswordTextComponent from "~components/passwordReset/text";

const NewPasswordScreen = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [newPasswordError, setNewPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  const handleChangeNewPasswordText = (text: string) => {
    setNewPassword(text);
    validatePassword(text, confirmPassword);
  };

  const handleChangeConfirmPasswordText = (text: string) => {
    setConfirmPassword(text);
    validatePassword(newPassword, text);
  };

  const validatePassword = (newPassword: string, confirmPassword: string) => {
    if (newPassword !== confirmPassword && confirmPassword !== "") {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }

    if (newPassword.length < 6 && newPassword !== "") {
      setNewPasswordError("Password should be at least 6 characters long");
    } else {
      setNewPasswordError("");
    }
  };

  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  const [adminSettings, setAdminSettings] = useState({
  title: "",
  logo: "",
  logoTop: 0,
  logoLeft: 0,
  logoPosition: undefined,
  titleColor: "",
  titleFontSize: 0,
  titleTop: 0,
  titleLeft: 0,
  titlePosition: undefined,
  borderRadiusInput: 0,
  inputBgColor: "",
  keyboardType: "",
  borderRadiusButton: 0,
  buttonOneColor: "",
  buttonOneBgColor: "",
});
    useEffect(() => {
      setAdminSettings({
        title: "Reset your password",
        logo: require("../../assets/images/emojione_bird.png"),
        logoTop: 0,
        logoLeft: 0,
        logoPosition: undefined,
        titleColor: "#29B6F6",
        titleFontSize: 36,
        titleTop: 0,
        titleLeft: 0,
        titlePosition: undefined,
        borderRadiusInput: 24,
        inputBgColor: "#fff",
        keyboardType: "email-address",
        borderRadiusButton: 24,
        buttonOneColor: "#29B6F6",
        buttonOneBgColor: "#fff",
      });
    }, []);

  return (
    <View style={COMMON_STYLES.CONTAINER}>
      <Header
        title={adminSettings.title}
        logo={adminSettings.logo as ImageSourcePropType}
        logoTop={adminSettings.logoTop}
        logoLeft={adminSettings.logoLeft}
        logoPosition={adminSettings.logoPosition}
        titleColor={adminSettings.titleColor}
        titleFontSize={adminSettings.titleFontSize}
        titleTop={adminSettings.titleTop}
        titleLeft={adminSettings.titleLeft}
        titlePosition={adminSettings.titlePosition}
      />
      <PasswordTextComponent text={"Type in your new password"} />
      <TextInputComponent
        value={newPassword}
        placeholder={"new password *"}
        onChangeText={handleChangeNewPasswordText}
        borderRadiusInput={adminSettings.borderRadiusInput}
        inputBgColor={adminSettings.inputBgColor}
        keyboardType={undefined}
        secureTextEntry={true}
      />
      {newPasswordError ? (
        <Text style={{ color: "red" }}>{newPasswordError}</Text>
      ) : null}
      <TextInputComponent
        value={confirmPassword}
        placeholder={"confirm password *"}
        onChangeText={handleChangeConfirmPasswordText}
        borderRadiusInput={adminSettings.borderRadiusInput}
        inputBgColor={adminSettings.inputBgColor}
        keyboardType={undefined}
        secureTextEntry={true}
      />
      {confirmPasswordError ? (
        <Text style={{ color: "red" }}>{confirmPasswordError}</Text>
      ) : null}
      <Button
        label="Reset"
        onPress={handleClick}
        borderRadiusButton={adminSettings.borderRadiusButton}
        buttonColor={adminSettings.buttonOneColor}
        buttonBgColor={adminSettings.buttonOneBgColor}
      />
    </View>
  );
};

export default NewPasswordScreen;
