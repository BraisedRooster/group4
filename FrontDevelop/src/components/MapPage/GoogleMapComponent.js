import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindowF, Marker } from "@react-google-maps/api";
import "../../styles/MapPage/GoogleMapComponent.css";
import markerImage from "../../matirial/Image/charger.png";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function GoogleMapComponent({
  center,
  defaultProps = { zoom: 10 },
  data = [],
  onPlaceSelect,
  onMapClick,
}) {
  const [rerender, setRerender] = useState(false);
  const [selectedCharger, setSelectedCharger] = useState(null);
  const [chargers, setChargers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/charger/")
      .then((res) => setChargers(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setRerender(true), 500); // delay of 500ms
    return () => clearTimeout(timer);
  }, []);

  const sampleChargers = [
    {
      charger_type: {
        image: null,
        name: "Fast Charger",
        brand: "ACME",
        power: "50 kW",
        port_type: "Type 2",
        amp: "125A",
        warranty: 2,
      },
      address: {
        street_address: "123 Main Street",
        lat: -33.8688,
        lng: 151.2093,
        suburb: "Sydney",
        post_code: "2000",
        country: "Australia",
      },
      name: "Charger 1",
      number_of_stars: 4,
      number_of_rating: "100",
      renter: 3,
    },
    {
      charger_type: {
        image: null,
        name: "Standard Charger",
        brand: "XYZ",
        power: "22 kW",
        port_type: "Type 1",
        amp: "32A",
        warranty: 1,
      },
      address: {
        street_address: "456 Elm Street",
        lat: -33.9167,
        lng: 151.2333,
        suburb: "Sydney",
        post_code: "2000",
        country: "Australia",
      },
      name: "Charger 2",
      number_of_stars: 5,
      number_of_rating: "50",
      renter: 2,
    },
    {
      charger_type: {
        image: null,
        name: "Ultra Charger",
        brand: "FastCharge",
        power: "100 kW",
        port_type: "Type 3",
        amp: "250A",
        warranty: 3,
      },
      address: {
        street_address: "789 Oak Avenue",
        lat: -33.8679,
        lng: 151.209,
        suburb: "Sydney",
        post_code: "2000",
        country: "Australia",
      },
      name: "Charger 3",
      number_of_stars: 3,
      number_of_rating: "75",
      renter: 1,
    },
  ];

  const handleMapClick = (e) => {
    console.log(e);
    if (onMapClick) onMapClick(e.latLng.lat(), e.latLng.lng());
  };

  const showChargerInfo = (charger) => {
    console.log(charger);
    setSelectedCharger(charger);
  };

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={defaultProps ? defaultProps.zoom : 10}
        onClick={handleMapClick}
      >
        {rerender &&
          chargers.map((charger, index) => {
            return (
              <Marker
                key={index}
                position={{
                  lat: JSON.parse(charger.address.lat),
                  lng: JSON.parse(charger.address.lng),
                }}
                onClick={() => showChargerInfo(charger)}
                icon={{
                  url: markerImage,
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            );
          })}
        {selectedCharger && (

            <InfoWindowF
                position={{
                  lat: JSON.parse(selectedCharger.address.lat),
                  lng: JSON.parse(selectedCharger.address.lng),
                }}
                onCloseClick={() => setSelectedCharger(null)}
            >
              <div className="info-container">
                <div className="top-section">
                  {/* Placeholder for Image */}
                  <div className="charger-image"></div>

                  <h4 className="charger-name">{selectedCharger.name}</h4>
                  <p className="type-power">
                    <strong>Type:</strong> {selectedCharger.charger_type.name}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>Power:</strong> {selectedCharger.charger_type.power}
                  </p>
                  <button className="check-in-btn">Check In</button>
                </div>

                <div className="details-section">
                  <div className="detail-item">
                    <button className="detail-icon">...</button>
                    <h4>{selectedCharger.name}</h4>
                  </div>
                  <div className="detail-item">
                    <button className="detail-icon">...</button>
                    <p><strong>Address:</strong> {selectedCharger.address.street_address}</p>
                  </div>
                  <div className="detail-item">
                    <button className="detail-icon">...</button>
                    <p><strong>Phone:</strong> +61 29693 9000</p>
                  </div>
                  <div className="detail-item">
                    <button className="detail-icon">...</button>
                    <p>
                      <strong>Rating:</strong>
                      {(
                          selectedCharger.number_of_stars /
                          selectedCharger.number_of_rating
                      ).toFixed(2)}
                    </p>
                  </div>
                  <div className="detail-item last-item">
                    <button className="detail-icon">...</button>
                    <p>No Free Parking</p>
                  </div>
                </div>
              </div>
            </InfoWindowF>

        )}

      </GoogleMap>
    </div>
  );
}

export default GoogleMapComponent;
