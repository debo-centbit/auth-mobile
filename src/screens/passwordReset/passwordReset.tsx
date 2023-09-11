import Button from "../../components/passwordReset/button/button";
import { COMMON_STYLES } from "~theme/common-styles";
import EmailConfirmationScreen from "./emailConfirmationScreen";
import Header from "../../components/passwordReset/header/header";
import PasswordTextComponent from "~components/passwordReset/text/text";
import React, { useEffect, useState } from "react";
import TextInputComponent from "~components/passwordReset/textInput/textInput";
import {
  View,
  StyleSheet,
  Text,
  ImageSourcePropType,
} from "react-native";

/**
 * Password Reset screen component.
 *
 * @component
 * @example
 * // Usage in a navigation stack
 * <PasswordReset />
 *
 * @returns {JSX.Element} The password reset screen.
 */

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [emailConfirmationScreen, setEmailConfirmationScreen] = useState(false);
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
    buttonTwoColor: "",
    buttonTwoBgColor: "",
  });
  const handleNextClick = () => {
    if (isValidEmail) {
      setEmailConfirmationScreen(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleBackToLoginClick = () => {
    console.log("Back to Login button pressed");
  };

  // Function to validate email using regex
  const validateEmail = (text: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(text));
    setEmail(text);
  };

  /**
   * Validates the phone input using regex.
   *
   * @param {string} text - The phone input text.
   */

  const validatePhone = (text: string) => {
    const phonePattern = /^[0-9]{11}$/;
    setIsValidPhone(phonePattern.test(text));
    setPhone(text);
  };

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
      buttonTwoColor: "#fff",
      buttonTwoBgColor: "#29B6F6",
    });
  }, []);

  return (
    <View style={COMMON_STYLES.CONTAINER}>
      {!emailConfirmationScreen && (
        <>
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
          <PasswordTextComponent
            text={`Type in your registered ${
              adminSettings.keyboardType === "email-address"
                ? "email address"
                : "phone number"
            } to reset your password`}
          />
          <TextInputComponent
            value={
              adminSettings.keyboardType === "email-address" ? email : phone
            } // Use the email state as the value
            placeholder={
              adminSettings.keyboardType === "email-address"
                ? "email address*"
                : "phone number"
            }
            onChangeText={
              adminSettings.keyboardType === "email-address"
                ? validateEmail
                : validatePhone
            } // Validate email when text input changes
            borderRadiusInput={adminSettings.borderRadiusInput}
            inputBgColor={adminSettings.inputBgColor}
            keyboardType={"email-address"}
          />
          {!isValidEmail && (
            <Text style={styles.errorText}>
              Please enter a valid email address.
            </Text>
          )}
          {!isValidPhone && (
            <Text style={styles.errorText}>
              Please enter a valid phone number.
            </Text>
          )}
          <Button
            label="Reset Password"
            onPress={handleNextClick}
            borderRadiusButton={adminSettings.borderRadiusButton}
            buttonColor={adminSettings.buttonOneColor}
            buttonBgColor={adminSettings.buttonOneBgColor}
          />
          <Button
            label="Back to Login"
            onPress={handleBackToLoginClick}
            borderRadiusButton={adminSettings.borderRadiusButton}
            buttonColor={adminSettings.buttonTwoColor}
            buttonBgColor={adminSettings.buttonTwoBgColor}
          />
        </>
      )}
      {emailConfirmationScreen && (
        <EmailConfirmationScreen
          email={adminSettings.keyboardType === "email-address"}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default PasswordReset;
