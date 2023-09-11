import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import React, { useRef } from "react";
import "~localization/i18n";
import { AppSafeAreaProvider } from "./components/safe-area";
import { default as RootNavigator } from "./navigation/root-navigator";
import { MainErrorBoundary } from "./screens/error";
import "./utils/ignore-logs";
import withStorybookUI from "./utils/storybook/withStorybook";
import { KeyboardAvoidingView } from 'react-native';

function App() {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  return (
    
    <AppSafeAreaProvider>
      <KeyboardAvoidingView>
        <MainErrorBoundary>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </MainErrorBoundary>
        </KeyboardAvoidingView>
      </AppSafeAreaProvider>
  );
}

export default withStorybookUI(App);



