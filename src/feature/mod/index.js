import { Route, Routes } from "react-router-dom";
import { modRoutes } from "../../routes/modRoute";

function ModRouter() {
  const ModRoutesComponent = modRoutes.map((route, index) => {
    const path = route.path;
    const Content = route.element;
    return <Route key={index} path={path} element={<Content />}></Route>;
  });
  return (
    <>
      <Routes>{ModRoutesComponent}</Routes>
    </>
  );
}

export default ModRouter;
