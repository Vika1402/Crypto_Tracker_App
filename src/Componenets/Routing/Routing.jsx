import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ContentLoader, { Facebook, Code } from "react-content-loader";
// import Home from "../../pages/Home";
// import CoinDetailsPage from "../../pages/CoinDetailsPage";
import Layout from "../../pages/Layout";
import { lazy } from "react";
import CusomeErrorBoundry from "../ErrorBoundry/CusomeErrorBoundry";
import Home2 from "../../pages/Home2";
const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));
function Routing() {
  return (
    <CusomeErrorBoundry>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Facebook />}>
                <Home2 />
              </Suspense>
            }
          />
          <Route
            path="/details/:coinId"
            element = <Suspense fallback={<Code />}>
              <CoinDetailsPage />
            </Suspense>
          />
        </Route>
      </Routes>
    </CusomeErrorBoundry>
  );
}

export default Routing;
