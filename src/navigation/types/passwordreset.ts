import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RouteNames } from "../route-names"; 
import { BottomTabParamList } from "./tabbar"; 


export type PasswordResetStackParamList= {
    [RouteNames.passwordReset]: undefined;
  };

export type PasswordResetStackNavigationProp<
  RouteName extends keyof PasswordResetStackParamList
> = CompositeNavigationProp<
  StackNavigationProp<PasswordResetStackParamList, RouteName>,
  BottomTabNavigationProp<BottomTabParamList>
>;

export type PasswordResetStackRouteProp<
  RouteName extends keyof PasswordResetStackParamList
> = RouteProp<PasswordResetStackParamList, RouteName>;

export type PasswordResetStackScreenProp<
  RouteName extends keyof PasswordResetStackParamList
> = StackScreenProps<PasswordResetStackParamList, RouteName>;
