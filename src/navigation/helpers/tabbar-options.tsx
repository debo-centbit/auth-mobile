import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { RouteNames } from "~navigation/route-names";
import { BottomTabParamList } from "~navigation/types";

export const BottomTabBarOptionByRouteName: Record<
  keyof BottomTabParamList,
  BottomTabNavigationOptions
> = {
  [RouteNames.homeStack]: {
    tabBarLabel: "Home",
    tabBarIcon: (props) => <FontAwesome5 name="home" {...props} />,
  },
  [RouteNames.profileStack]: {
    tabBarLabel: "Profile",
    tabBarIcon: (props) => <FontAwesome5 name="user" {...props} />,
  },
  [RouteNames.signUp]: {
    tabBarLabel: "Signup",
    tabBarIcon: (props) => <FontAwesome5 name="user" {...props} />,
  },
};
