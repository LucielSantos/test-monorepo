import { PermissionKey } from "../types/auth";

export const verifyAuthentication = (permission: PermissionKey) => !!permission;
