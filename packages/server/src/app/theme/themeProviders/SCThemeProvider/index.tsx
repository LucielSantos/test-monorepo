import React, { memo } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../..";
import { GlobalStyle } from "../../global";

interface IProps {}

const SCThemeProviderComponent: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}

      <GlobalStyle />
    </ThemeProvider>
  );
};

export const SCThemeProvider = memo(SCThemeProviderComponent);
