import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";
import Button from "../../components/passwordReset/button/button";
import Header from "../../components/passwordReset/header/header";
import PasswordTextComponent from "~components/passwordReset/text/text";

interface ConfirmationProp {
  email: boolean;
}

const EmailConfirmationScreen: React.FC<ConfirmationProp> = ({ email }) => {
  const handleBackToLoginClick = () => {
    console.log("Back to Login button pressed");
  };
  function handleSupport() {
    throw new Error("Function not implemented.");
  }
  const [isLoading, setIsLoading] = useState(true);
  const [contactSupport, setContactSupport] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setContactSupport(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
    borderRadiusButton: 0,
    buttonOneColor: "",
    buttonOneBgColor: "",
    buttonTwoColor: "",
    buttonTwoBgColor: "",
    keyboardType: "",
  });
  useEffect(() => {
    setAdminSettings({
      //  title: '',
      title: `Recovery ${email ? "Email" : "Code"} Sent!`,
      logo: require("../../assets/images/emojione_bird.png"),
      logoTop: 0,
      logoLeft: 0,
      logoPosition: undefined,
      titleColor: "#29B6F6",
      titleFontSize: 36,
      titleTop: 0,
      titleLeft: 0,
      titlePosition: undefined,
      borderRadiusButton: 24,
      buttonOneColor: "#29B6F6",
      buttonOneBgColor: "#fff",
      buttonTwoColor: "#fff",
      buttonTwoBgColor: "#29B6F6",
      keyboardType: "email-address",
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Loading</Text>
          <ActivityIndicator />
        </View>
      ) : (
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
          <PasswordTextComponent
            text={`Please check your ${
              adminSettings.keyboardType === "email-address" ? "email" : "phone"
            } for next steps to reset your password.`}
          />
          <Button
            label="Contact Support"
            onPress={handleSupport}
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
        </View>
      )}
    </>
  );
};

export default EmailConfirmationScreen;
