import { useRef, useEffect } from "react";
import { Icon, Marker, layerGroup } from "leaflet";
import { useMap } from "../useMap/useMap";
import { CityOffer, FullOffer, OffersList } from "../../types/offer";
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from "../../const";
import "leaflet/dist/leaflet.css";

type MapProps = {
  city: CityOffer;
  offers: OffersList[] | FullOffer[];
  selectedOffer?: OffersList;
  block: string;
  currentOffer?: FullOffer;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ block, city, offers, selectedOffer, currentOffer }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) return;

    // Очистка слоя перед обновлением
    map.eachLayer((layer) => {
      if (layer instanceof Marker) {
        map.removeLayer(layer);
      }
    });

    const markerLayer = layerGroup().addTo(map);
    map.setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom
    );

    // Отображение текущего предложения (если оно есть)
    if (currentOffer) {
      const marker = new Marker([
        currentOffer.location.latitude,
        currentOffer.location.longitude,
      ]);
      marker.setIcon(currentCustomIcon).addTo(markerLayer);
    }

    // Отображение остальных предложений
    offers?.forEach((offer) => {
      const marker = new Marker([
        offer.location.latitude,
        offer.location.longitude,
      ]);

      // Проверка активного маркера
      const isActive = selectedOffer?.id === offer.id;
      marker
        .setIcon(isActive ? currentCustomIcon : defaultCustomIcon)
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer); // Удаляем слой перед следующим ререндером
    };
  }, [map, offers, selectedOffer, currentOffer, city]);

  return (
    <section
      className={`${block}__map map`}
      ref={mapRef}
      style={{
        height: "100%",
        minHeight: "500px",
        width: "100%",
        maxWidth: "1144px",
        margin: "0 auto",
      }}
    />
  );
}

export { Map };
