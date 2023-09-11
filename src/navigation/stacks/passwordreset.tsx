import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { RouteNames } from "../route-names"; // Adjust the import path
import { PasswordResetStackParamList, StackRoutesType } from "../types"; // Adjust the import path
import { PasswordReset } from "~screens/passwordReset";

const Stack = createStackNavigator<PasswordResetStackParamList>(); // Adjust the stack param type

const resetPasswordStackRoutes: StackRoutesType<PasswordResetStackParamList> = [
  { name: RouteNames.passwordReset, component: PasswordReset },
  // { name: RouteNames.emailConfirmation, component: EmailConfirmationScreen },
  // { name: RouteNames.newPassword, component: NewPasswordScreen },
];

function PasswordResetStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={RouteNames.passwordReset}>
      {resetPasswordStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default PasswordResetStack;
