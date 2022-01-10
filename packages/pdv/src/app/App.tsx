import { Notification } from "./components/Notification";
import { Routes } from "./routes";
import { MUIThemeProvider, SCThemeProvider } from "./theme/themeProviders";
import { VyooTheme } from "@vyoo-monorepo/theme-config";

export const App = (): JSX.Element => {
  return (
    <VyooTheme>
      <Routes />

      <Notification />
    </VyooTheme>
  );
};
