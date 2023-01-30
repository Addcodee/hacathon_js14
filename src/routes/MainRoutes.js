import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/NavbarPages/AdminPage";
import CartPage from "../pages/NavbarPages/CartPage/CartPage";
import ElectroCarsPage from "../pages/NavbarPages/ElectroCarsPage";
import HomePage from "../pages/HomePage/HomePage";
import ModelsPage from "../pages/NavbarPages/ModelsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesPage from "../pages/NavbarPages/ServicesPage";
import EditProduct from "../components/products/EditProduct";
import AuthPage from "../pages/MenuPages/AuthPage";
import ProfilePage from "../pages/MenuPages/ProfilePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/electro-cars", element: <ElectroCarsPage />, id: 2 },
    { link: "/models", element: <ModelsPage />, id: 3 },
    { link: "/services", element: <ServicesPage />, id: 4 },
    { link: "/admin", element: <AdminPage />, id: 5 },
    { link: "/cart", element: <CartPage />, id: 6 },
    { link: "/edit/:id", element: <EditProduct />, id: 7 },
    { link: "/auth", element: <AuthPage />, id: 8 },
    { link: "/profile", element: <ProfilePage />, id: 9 },
    { link: "*", element: <NotFoundPage />, id: 10 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route
            path={item.link}
            element={item.element}
            key={item.id}
          />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
