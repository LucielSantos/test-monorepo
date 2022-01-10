import { ComponentType, ReactNode } from "react";

import { routePaths } from "../constants/routes";

import {
  Api,
  Database,
  Home,
  IpcMain,
  Store,
  InitialConfig,
  Layout,
  Login,
} from "../pages";

import { PermissionKey } from "../types/auth";

import { Admin } from 'vy/app/layout'
import { RouteProps } from "react-router-dom";

export interface IRoute {
  path: string;
  component: RouteProps['component'];
  exact?: boolean;
  permission?: PermissionKey;
  wrapper?: ComponentType<any>
}

export const adminRoutes: IRoute[] = [];

export const publicRoutes: IRoute[] = [
  {
    path: routePaths.layout,
    wrapper: Admin,
    component: Layout
  },
  {
    path: routePaths.login,
    component: Login,
    exact: true,
  },

  {
    path: routePaths.initialConfig,
    component: InitialConfig,
    exact: true,
  },
  {
    path: routePaths.api,
    component: Api,
    exact: true,
  },
  {
    path: routePaths.database,
    component: Database,
    exact: true,
  },
  {
    path: routePaths.home,
    component: Home,
    exact: true,
  },
  {
    path: routePaths.ipcMain,
    component: IpcMain,
    exact: true,
  },
  {
    path: routePaths.store,
    component: Store,
    exact: true,
  },
];
