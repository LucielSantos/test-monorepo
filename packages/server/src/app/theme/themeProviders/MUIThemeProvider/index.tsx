import React, { memo, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "styled-components";
import { defaultFontFamily } from "vy/app/constants/layout";

interface IProps {}

const MUIThemeProviderComponent: React.FC<IProps> = ({ children }) => {
  const scTheme = useTheme();

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: defaultFontFamily,
        },
        components: {
          MuiInputLabel: {
            styleOverrides: {
              root: {
                fontSize: scTheme.fonts.sizes.sm,
                fontWeight: scTheme.fonts.weight.medium,
              },
              animated: {
                transform: "translate(14px, 14px) scale(1)",
              },
              shrink: {
                transform: "translate(14px, -9px) scale(0.9) !important",
              },
            },
          },
          MuiFormHelperText: {
            styleOverrides: {
              root: {
                marginBottom: ".3rem !important",
              },
            },
          },
          MuiAutocomplete: {
            styleOverrides: {
              noOptions: {
                fontSize: scTheme.fonts.sizes.sm,
                fontStyle: "italic",
              },
              loading: {
                fontSize: scTheme.fonts.sizes.sm,
              },
            },
          },
        },
        palette: {
          primary: {
            main: scTheme.colors.primary,
          },
        },
        ...scTheme,
      }),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const MUIThemeProvider = memo(MUIThemeProviderComponent);
