import { ReactNode } from "react";
import { Position } from "./enums";

export interface UserDetailsProps {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  [key: string]: any;
}

export interface StyleProps {
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

export interface ButtonProps {
  borderRadius: number;
  children: ReactNode | string;
  top: number;
  left: number;
  position: Position;
  color: string;
  bgColor: string;
  btnWidth: number;
  btnHeight: number;
  testID: string;
  onPress: () => void;
}

export interface FieldConfig {
  name: string;
  placeholder: string;
}

export interface FormFieldsProps {
  fieldsConfig: FieldConfig[];
  handleChange: (fieldName: string, value: string) => void;
  userDetails: UserDetailsProps;
  borderRadius: number;
  marginTop: number;
}

export interface LogoProps {
  imageUrl: string;
  logoWidth: number;
  logoHeight: number;
  logoPosition: Position;
  logoTop: number;
  logoLeft: number;
  containerTestID: string;
  imageTestID: string;
}
