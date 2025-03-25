// Для того, чтобы передать в точку входа (файл index.tsx) значение,
// которое будет сохраняться в props для компонента главной страницы,
// заведем файл для хранения константных значений. В папке src создадим файл const.ts  и сохраним в нем следующий код:

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

export { AppRoute, AuthorizationStatus };

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

