import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./components/routes";
import { Suspense } from "react";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  const PublicRoutesComponent = publicRoutes.map((route, index) => {
    const path = route.path;
    const Content = route.element;
    const Layout = route.layout ? route.layout : DefaultLayout;
    return (
      <Route
        key={index}
        path={path}
        element={
          <Layout>
            <Content />
          </Layout>
        }
      />
    );
  });
  return (
    <>
      <Suspense fallback={<>...Loading</>}>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          {PublicRoutesComponent}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
