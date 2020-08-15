import styled from "styled-components";
import { typeScale} from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
      font-size: ${typeScale.helperText};
      padding: 8px;
    `,
    large: () => `
      font-size: ${typeScale.header5};
      padding: 16px 24px;
    `,
    warning: () => `
      background: none;
      color: ${props => props.theme.status.warningColor};
      &:hover, &:focus {
        background-color: ${props => props.theme.status.warningColorHover};
      }

      &:focus {
        outline: 3px solid ${props => props.theme.status.warningColorHover};
        outline-offset: 2px;
      }
  
      &:active {
        background-color: ${props => props.theme.status.warningColorActive};
      }
    `,
    primaryButtonWarning: () => `
      background-color: ${props => props.theme.status.warningColor};
      color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonWarning: () => `
      border: 2px solid ${props => props.theme.status.warningColor};
      
      &:hover,&:focus {
        border: 2px solid transparent;
      }
    `,
    error: () => `
      background: none;
      color: ${props => props.theme.status.errorColor};
      &:hover, &:focus {
        background-color: ${props => props.theme.status.errorColorHover};
      }
      &:focus {
        outline: 3px solid ${props => props.theme.status.errorColorHover};
        outline-offset: 2px;
      }
      &:active {
        background-color: ${props => props.theme.status.errorColorActive};
      }
    `,
    primaryButtonError: () => `
      background-color: ${props => props.theme.status.errorColor};
      color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonError: () => `
      border: 2px solid ${props => props.theme.status.errorColor};

      &:hover,&:focus {
        border: 2px solid transparent;
      }
    `,
    success: () => `
      background: none;
      color: ${props => props.theme.status.successColor};
      &:hover, &:focus {
        background-color: ${props => props.theme.status.successColorHover};
      }
      &:focus {
        outline: 3px solid ${props => props.theme.status.successColorHover};
        outline-offset: 2px;
      }
      &:active {
        background-color: ${props => props.theme.status.successColorActive};
      }
    `,
    primaryButtonSuccess: () => `
      background-color: ${props => props.theme.status.successColor};
      color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonSuccess: () => `
      border: 2px solid ${props => props.theme.status.successColor};
      
      &:hover,&:focus {
        border: 2px solid transparent;
      }
    `
  };

const Button = styled.button`
padding: 12px 24px;
font-size: ${typeScale.paragraph};
border-radius: 2px;
min-width: 100px;
cursor: pointer;
font-family: "Roboto Mono", monospace;
transition: background-color 0.2 linear, color 0.2s linear;

&:hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
}

&:focus {
    background-color: ${props => props.theme.primaryColorFocus};
    color: ${props => props.theme.textColorOnPrimary};
    outline: 2px solid ${props => props.theme.primaryColorFocus};
    outline-offset: 2px;
}

&:active {
    background-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorOnPrimary};
}

&:disabled {
    background-color: ${props => props.theme.primaryColorDisabled};
    color: ${props => props.theme.textColorOnPrimary};
    cursor: not-allowed;
}
`;

export const PrimaryButton = styled(Button)`
 background: ${props => props.theme.primaryColor};
 border: none;
 color: ${props => props.theme.textColorOnPrimary};

 ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid  ${props => props.theme.primaryColor};
    color:  ${props => props.theme.primaryColor};
    
    &:hover {
        border: 2px solid ${props => props.theme.primaryColorHover};
    }

    &:focus {
        border: 2px solid ${props => props.theme.primaryColorFocus};
    }

    &:active {
        border: 2px solid ${props => props.theme.primaryColorActive};
    }

    &:disabled {
        border: 2px solid ${props => props.theme.primaryColorDisabled};
        background-color: white;
        color: ${props => props.theme.primaryColorDisabled};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${props => props.theme.primaryColor};

    &:disabled {
        border: none;
        background-color: white;
        color: ${props => props.theme.primaryColorDisabled};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;