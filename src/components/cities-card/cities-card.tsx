import React, { JSX, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { MouseEvent } from "react";

type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  rating: number;
  onListItemHover?: (offerId: string) => void;
  block: string;
};

function CitiesCard({
  id,
  title,
  type,
  price,
  previewImage,
  isPremium,
  isFavorite,
  rating,
  block,
  onListItemHover,
}: CitiesCardProps) {
  const [, setOfferId] = useState("");
  const [isFavoriteOffer, setIsFavoriteOffer] = useState(isFavorite);
  const handleButtonClick = () => {
    setIsFavoriteOffer((prev) => !prev);
  };

  const handleCityCardOver = (event: MouseEvent<HTMLLIElement>) => {
    if (onListItemHover === undefined) {
      return;
    }
    event.preventDefault();
    setOfferId(id);
    onListItemHover(id);
  };

  const handleCityCardOut = (event: MouseEvent<HTMLLIElement>) => {
    if (onListItemHover === undefined) {
      return;
    }
    event.preventDefault();
    setOfferId('');
    onListItemHover('');
  };
  return (
    <div>
      {
        <article
          className="cities__card place-card"
          onMouseOver={() => setOfferId(id)}
          onMouseOut={() => setOfferId("")}
        >
          <div className="placecard__mark-">
            <span>{isPremium}</span>
          </div>
          <div className="cities__image-wrapper place-card__image-wrapper">
            <Link to={`${AppRoute.Offer}/${id}`}>
              <img
                className="place-card__image"
                src={previewImage}
                width="260"
                height="200"
                alt="Place image"
              />
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className="place-card__bookmark-button button"
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width="18"
                  height="19"
                >
                  <use href="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: "80%" }}></span>
                <span className="visually-hidden">{rating}</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">Canal View Prinsengracht</a>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      }
    </div>
  );
}
export { CitiesCard };
