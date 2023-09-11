import { AppSafeAreaProvider } from "./components/safe-area";
import { default as RootNavigator } from "./navigation/root-navigator";
import { MainErrorBoundary } from "./screens/error";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import React, { useRef } from "react";
import withStorybookUI from "./utils/storybook/withStorybook";
import "~localization/i18n";
import "./utils/ignore-logs";

function App() {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  return (
    <AppSafeAreaProvider>
      <MainErrorBoundary>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </MainErrorBoundary>
    </AppSafeAreaProvider>
  );
}

export default withStorybookUI(App);
