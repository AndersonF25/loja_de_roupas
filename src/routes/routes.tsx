import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader/Loader";
import Teste from "../pages/Teste";

// Lazy loading das páginas
const Home = lazy(() => import("../pages/Home/Home"));
const DetailsProduct = lazy(
  () => import("../pages/DetailsProduct/DetailsProduct")
);
const CartItems = lazy(() => import("../pages/CartItems/CartItems"));
const Man = lazy(() => import("../pages/Categorys/Man/Man"));
const Women = lazy(() => import("../pages/Categorys/Women/Women"));
const Children = lazy(() => import("../pages/Categorys/Children/Children"));
const SearchResponse = lazy(
  () => import("../pages/SearchResponse/SearchResponse")
);

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<Loader />}>
            <DetailsProduct />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<Loader />}>
            <CartItems setOpenCart={() => {}} />
          </Suspense>
        }
      />
      <Route
        path="/man"
        element={
          <Suspense fallback={<Loader />}>
            <Man />
          </Suspense>
        }
      />
      <Route
        path="/women"
        element={
          <Suspense fallback={<Loader />}>
            <Women />
          </Suspense>
        }
      />
      <Route
        path="/children"
        element={
          <Suspense fallback={<Loader />}>
            <Children />
          </Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <Suspense fallback={<Loader />}>
            <SearchResponse />
          </Suspense>
        }
      />
      <Route
        path="/teste"
        element={
          <Suspense fallback={<Loader />}>
            <Teste />
          </Suspense>
        }
      />
    </Routes>
  );
};
