import {primary, neutral, success, error, warning} from "./colors";
import {primaryFont} from "./typography";
import { withTheme } from "styled-components";

export const defaultTheme = {
    primaryColor: primary[100],
    primaryColorHover: primary[200],
    primaryColorFocus: primary[200],
    primaryColorActive: primary[300],
    primaryColorDisabled: neutral[300],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    primaryFont,
    status: {
        warningColor: warning[100],
        warningColorHover: warning[200],
        warningColorActive: warning[300],
        errorColor: error[100],
        errorColorHover: error[200],
        errorColorActive: error[300],
        successColor: success[100],
        successColorHover: success[200],
        successColorActive: success[300]
      }
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: primary[300],
  textColor: primary[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  formElementBackground: primary[100],
  textOnFormElementBackground: neutral[600],
  status: {
    warningColor: warning[100],
    warningColorHover: warning[200],
    warningColorActive: warning[300],
    errorColor: error[100],
    errorColorHover: error[200],
    errorColorActive: error[300],
    successColor: success[100],
    successColorHover: success[200],
    successColorActive: success[300]
  }
};