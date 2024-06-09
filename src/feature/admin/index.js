import { Route, Routes, useNavigate } from "react-router-dom";
import { adminRoutes } from "../../routes";
import { useEffect } from "react";

function AdminRouter() {
  const AdminRoutesComponent = adminRoutes.map((route, index) => {
    const path = route.path;
    const Content = route.element;
    return <Route key={index} path={path} element={<Content />}></Route>;
  });
  return (
    <>
      <Routes>{AdminRoutesComponent}</Routes>
    </>
  );
}

export default AdminRouter;
