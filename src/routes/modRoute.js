import PostManagementPage from "../feature/mod/page/post-management";
import SalerManagementPage from "../feature/mod/page/saler-management";

export const modRoutes = [
  { path: "", element: SalerManagementPage },
  { path: "saler-management", element: SalerManagementPage },
  { path: "post-management", element: PostManagementPage },
];
