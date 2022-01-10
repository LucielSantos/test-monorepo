import { icons } from "vy/app/components/Icon/icons";

export const routePaths = {
  home: "/home",
  api: "/api",
  database: "/database",
  ipcMain: "/ipcMain",
  store: "/store",
  initialConfig: "/initial-config",
  login: "/login",
  layout: "/layout",
  photos: "/photos",
};

export const adminRoutes = [
  {
    path: routePaths.home,
    icon: icons.home,
    label: "Home",
  },
  {
    path: routePaths.layout,
    icon: icons.home,
    label: "Layout",
  },
];
