import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Button from "../../components/button/button";
import Logo from "../../components/logo/logo";
import FormField from "../../components/form-field/form-field";

interface Settings {
  emailOrPhone: "email" | "phone";
  passwordOrMagicLink: "password" | "magic";
  borderRadius: number;
  buttonColor: string;
  logoUrl: string;
  logoPosition: "top" | "bottom";
}

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<Record<string, object>>>();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        setSettings(response.data.data[0]); // Assuming you want to use the first data item.
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator size="large" color="rgb(53,183,243)" />
      </View>
    );
  }

  if (!settings) {
    return null;
  }

  const { borderRadius, buttonColor, logoUrl, logoPosition } = settings;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Button
          label="Back"
          variant="back"
          buttonColor={buttonColor}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.loginText}>Login</Text>

        <Logo logoUrl={logoUrl} logoPosition={logoPosition} />

        {/* Replaced TextInput elements with FormField components */}
        <FormField placeholder="Email address/Phone number" />
        <FormField placeholder="Password/Magic link" secureTextEntry />

        <View style={styles.loginButtonContainer}>
          <Button
            label="Login"
            variant="login"
            buttonColor={buttonColor}
            // onPress={() => navigation.navigate("Launch")}
          />
        </View>

        <View style={styles.footContainer}>
          <Text style={{ color: "rgb(125,125,125)" }}>Forgot Password</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "rgb(247,247,247)",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 50,
  },
  loginText: {
    color: "rgb(53,183,243)",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  loginButtonContainer: {
    marginTop: 30,
  },
  footContainer: {
    marginTop: 20,
  },
});

export default LoginScreen;
