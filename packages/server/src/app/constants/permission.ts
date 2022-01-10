const groups = { create: "create", inventoryManage: "inventoryManage" };

const modules = {
  operation: "operation",
  PDV: "PDV",
  user: "user",
  product: "product",
  PAX: "PAX",
  price_table: "price_table",
  manage_all_inventory: "manage_all_inventory",
};

export const permissions = {
  groups,
  modules,
};

interface PermissionKey {
  group: keyof typeof groups;
  module: keyof typeof modules;
}

type Keys =
  | "CREATE_OPERATION"
  | "CREATE_PDV"
  | "CREATE_PRODUCT"
  | "CREATE_USER"
  | "CREATE_PAX"
  | "CREATE_PRICE_TABLE"
  | "INVENTORY_MANAGE_MANAGE_ALL";

export const permissionKeys: Record<Keys, PermissionKey> = {
  CREATE_OPERATION: {
    group: "create",
    module: "operation",
  },
  CREATE_PDV: {
    group: "create",
    module: "PDV",
  },
  CREATE_PRODUCT: {
    group: "create",
    module: "product",
  },
  CREATE_USER: {
    group: "create",
    module: "user",
  },
  CREATE_PAX: {
    group: "create",
    module: "PAX",
  },
  CREATE_PRICE_TABLE: {
    group: "create",
    module: "price_table",
  },
  INVENTORY_MANAGE_MANAGE_ALL: {
    group: "inventoryManage",
    module: "manage_all_inventory",
  },
};
