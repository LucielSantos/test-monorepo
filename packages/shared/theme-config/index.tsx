import { SCThemeProvider, MUIThemeProvider } from "./theme/themeProviders";

export const VyooTheme = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <SCThemeProvider>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </SCThemeProvider>
  );
};
