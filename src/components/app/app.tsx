import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import LoginPage from "../../pages/login-page/login-page";
import Error404Page from "../../pages/error404-page/error404-page";
import OfferPage from "../../pages/offer-page/offer-page";
import { AppRoute, AuthorizationStatus } from "../../const"; //AppRoute — объект с маршрутами (/login, /favorites и т. д.).AuhorizationStatus — объект с возможными статусами авторизации (Auth, NoAuth).
import { PrivateRoute } from "../private-route/private-route";

//Опишем в компоненте app передачу props компоненту главной страницы
type AppMainPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={rentalOffersCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
