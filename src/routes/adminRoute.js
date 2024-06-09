import UserManagementPage from "../feature/admin/page/user-management";

export const adminRoutes = [
  { path: "", element: UserManagementPage },
  { path: "user-management", element: UserManagementPage },
  //   { path: "product-management", element: UserManagementPage },
];
