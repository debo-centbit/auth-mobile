import * as React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
} from "react-native";
import { COMMON_STYLES } from "../../theme/common-styles";
import ButtonComponent from "./components/ButtonComponent";
import FormFieldsComponent from "./components/FormFieldsComponent";
import LogoComponent from "./components/LogoComponent";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";

export interface UserDetailsProps {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  [key: string]: any;
}

export enum Position {
  ABSOLUTE = "absolute",
  RELATIVE = "relative",
}

interface StyleProps {
  color: string;
  top: number;
  left: number;
  position: Position;
  borderRadius: number;
  bgColor: string;
  width: number;
  height: number;
  inputBorderRadius: number;
  inputMarginTop: number;
  backBtnLeft: number;
}

function SignUpScreen() {
  const [userDetails, setUserDetails] = useState<UserDetailsProps>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [showForm, setShowForm] = useState<boolean>(true);
  const [styles, setStyles] = useState<StyleProps>({
    color: "",
    top: 0,
    left: 0,
    position: Position.RELATIVE,
    borderRadius: 0,
    bgColor: "",
    width: 0,
    height: 0,
    inputBorderRadius: 0,
    inputMarginTop: 0,
    backBtnLeft: 0,
  });

  const formFields = [
    { name: "firstName", placeholder: "Enter first name" },
    { name: "lastName", placeholder: "Enter last name" },
    { name: "phoneNumber", placeholder: "Enter phone number" },
    { name: "email", placeholder: "Enter email address" },
    { name: "password", placeholder: "Enter your password" },
  ];

  const handleChangeUserDetails = (fieldName: string, value: string) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, [fieldName]: value }));
  };

  const handlePressSignUp = () => {
    console.log("Sign up btn clicked");
  };

  useEffect(() => {
    setStyles({
      color: "#fff",
      top: 0,
      left: 0,
      backBtnLeft: -10 * 16,
      position: Position.RELATIVE,
      borderRadius: 1.5 * 16,
      bgColor: "#29B6F6",
      width: 19.0625 * 16,
      height: 2.75 * 16,
      inputBorderRadius: 1.5 * 16,
      inputMarginTop: 20,
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[COMMON_STYLES.CENTER_CONTAINER]}>
        {showForm && (
          <>
            <ButtonComponent
              onPress={() => setShowForm(false)}
              children={
                <Icon name="arrow-left" size={15} color={styles.color} />
              }
              borderRadius={10}
              color={styles.color}
              bgColor={styles.bgColor}
              top={styles.top}
              left={styles.backBtnLeft}
              position={styles.position}
              btnWidth={2.75 * 16}
              btnHeight={styles.height}
              testID={"test-button1"}
            />

            <Text
              style={{
                color: styles.bgColor,
                fontSize: 2.5 * 16,
                fontWeight: "700",
              }}>
              Sign Up
            </Text>
            <FormFieldsComponent
              fieldsConfig={formFields}
              userDetails={userDetails}
              handleChange={handleChangeUserDetails}
              borderRadius={styles.inputBorderRadius}
              marginTop={styles.inputMarginTop}
            />
            <ButtonComponent
              children="Sign Up"
              borderRadius={styles.borderRadius}
              color={styles.color}
              bgColor={styles.bgColor}
              top={styles.top}
              left={styles.left}
              position={styles.position}
              btnWidth={styles.width}
              btnHeight={styles.height}
              testID={"test-button2"}
              onPress={handlePressSignUp}
            />
            <Text style={{ color: "#2C2929" }}>You are completely safe.</Text>
            <Text style={{ color: styles.bgColor }}>
              Read our Terms & Conditions.
            </Text>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignUpScreen;
