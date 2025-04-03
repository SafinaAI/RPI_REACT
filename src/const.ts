// Для того, чтобы передать в точку входа (файл index.tsx) значение,
// которое будет сохраняться в props для компонента главной страницы,
// заведем файл для хранения константных значений. В папке src создадим файл const.ts  и сохраним в нем следующий код:

import { CityOffer } from "./types/offer";

const Setting = {
  rentalOffersCount: 312,
} as const;
export { Setting };

const AppRoute = {
  Main: "/",
  Login: "/login",
  Favorites: "/favorites",
  Offer: "/offer",
  Error404: "error404",
} as const;

// При обращении к странице Favorites пользователя, в случае, если он не авторизован, необходимо переадресовывать на страницу Login. Для этой реализации необходимо создать компонент для описания приватных маршрутов. Далее будем использовать этого компонент для реализации обращения к странице Избранное.

const AuthorizationStatus = {
  Auth: "AUTH",
  NoAuth: "NO_AUTH",
  Unknown: "UNKNOWN",
};

const BlockName = {
  AllPages: "cities",
  AllPagesList: "cities__places-list",
  Offer: "offer",
  NearOfferList: "near-places__list",
  NearOffer: "near-places",
} as const;

const NameSpace = {
  User: "USER",
  Offers: "OFFERS",
  Review: "REVIEW",
} as const;

// export { AppRoute, AuthorizationStatus, };

const URL_MARKER_DEFAULT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg";

const URL_MARKER_CURRENT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg";

const CITIES_LOCATION: CityOffer[] = [
  {
    name: "Paris",
    location: {
      latitude: 48.5112,
      longitude: 2.2055,
      zoom: 8,
    },
  },
  {
    name: "Cologne",
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8,
    },
  },
  {
    name: "Brussels",
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 8,
    },
  },
  {
    name: "Amsterdam",
    location: {
      latitude: 52.2206,
      longitude: 4.5322,
      zoom: 8,
    },
  },
  {
    name: "Humburg",
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 8,
    },
  },
  {
    name: "Dusseldorg",
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 8,
    },
  },
];
// export { CITIES_LOCATION };

const SortOffersType = {
  Popular: "Popular",
  PriceToHight: "Price: low to high",
  PriceToLow: "Price: high to low",
  TopRated: "Top rated first",
};
// export { SortOffersType, BlockName, NameSpace };

const STARTS_COUNT = 5;

const MIN_COMMENT_LENGTH = 50;

const MAX_COMMENT_LENGTH = 300;

const MIN_RATING = 0;

const MAX_RATING = 5;

const DISPLAYED_COMMENTS = 10;

const APIRoute = {
  Offers: "/offers",
  Login: "/login",
  Logout: "/logout",
  Comments: "/comments",
  NeabyOffers: "/nearby",
  FavoriteOffers: "/favorite",
} as const;

export {
  AppRoute,
  AuthorizationStatus,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  BlockName,
  STARTS_COUNT,
  CITIES_LOCATION,
  SortOffersType,
  APIRoute,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  MIN_RATING,
  MAX_RATING,
  NameSpace,
  DISPLAYED_COMMENTS,
};
