import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/NavbarPages/AdminPage";
import CartPage from "../pages/NavbarPages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import ModelsPage from "../pages/NavbarPages/ModelsPage";
import NotFoundPage from "../pages/NotFoundPage";
import EditProduct from "../components/products/EditProduct";
import AuthPage from "../pages/MenuPages/AuthPage";
import ProfilePage from "../pages/MenuPages/ProfilePage";
import { useAuth } from "../context/AuthContextProvider";
import { ADMIN } from "../helpers/variables";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/models", element: <ModelsPage />, id: 2 },
    { link: "/cart", element: <CartPage />, id: 3 },
    { link: "/auth", element: <AuthPage />, id: 4 },
    { link: "/profile", element: <ProfilePage />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 7 },
    { link: "/edit/:id", element: <EditProduct />, id: 8 },
  ];

  const { user } = useAuth();

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

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user?.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
