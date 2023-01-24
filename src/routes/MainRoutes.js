import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ElectroCarsPage from "../pages/ElectroCarsPage";
import HomePage from "../pages/HomePage";
import ModelsPage from "../pages/ModelsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesPage from "../pages/ServicesPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/electro-cars", element: <ElectroCarsPage />, id: 2 },
    { link: "/models", element: <ModelsPage />, id: 3 },
    { link: "/services", element: <ServicesPage />, id: 4 },
    { link: "*", element: <NotFoundPage />, id: 5 },
    { link: "/admin", element: <AdminPage />, id: 6 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
