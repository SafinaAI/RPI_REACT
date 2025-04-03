import { store } from "../store/index";
import { CityOffer, FullOffer, OffersList } from '../types/offer';
import { SortOffer } from './sort.js';

export type OffersProcess = {
    city: CityOffer | undefined;
    offers: OffersList[];
    offersDefault : OffersList[];
    activeSortOffersType: SortOffer;
    fullOffer: FullOffer | null;
    nearbyOffers: OffersList[];
    favoriteOffers: OffersList[];
    isOffersDataLoading: boolean;
    isFullOfferDataLoading: boolean;
    isNearbyOffersLoading: boolean;
    isFavoriteOffersLoading: boolean;
    hasError: boolean;
  }

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;