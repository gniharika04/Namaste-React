import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import About from "./src/Components/About";
import ErrorPage from "./src/Components/ErrorPage";
import Contact from "./src/Components/Contact";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Login from "./src/Components/Login";
import { useOnline } from "./src/util/useOnline";

const Instamart = lazy(() => import("./src/Components/Instamart"));

const AppLayout = () => {
  const isOnline = useOnline();
  return (
    <>
      <Header />
      {isOnline ? (
        <>
          <Outlet />
          <Footer />
        </>
      ) : (
        <h1 className="offline-text">
          Please check your internet connection!!
        </h1>
      )}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Instamart />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/home",
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
