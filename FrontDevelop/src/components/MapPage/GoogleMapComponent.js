import React, {useEffect, useState} from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import '../../styles/MapPage/GoogleMapComponent.css';
import markerImage from '../../matirial/Image/charger.png';

const containerStyle = {
    width: '100%',
    height: '100%'
};



function GoogleMapComponent({ center, defaultProps = { zoom: 10 }, data = [], onPlaceSelect, onMapClick }) {

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 500);  // delay of 500ms
        return () => clearTimeout(timer);
    }, []);
    const [selectedCharger, setSelectedCharger] = useState(null);
    const sampleChargers = [
        {
            charger_type: {
                image: null,
                name: 'Fast Charger',
                brand: 'ACME',
                power: '50 kW',
                port_type: 'Type 2',
                amp: '125A',
                warranty: 2,
            },
            address: {
                street_address: '123 Main Street',
                lat: -33.8688,
                lng: 151.2093,
                suburb: 'Sydney',
                post_code: '2000',
                country: 'Australia',
            },
            name: 'Charger 1',
            number_of_stars: 4,
            number_of_rating: '100',
            renter: 3,
        },
        {
            charger_type: {
                image: null,
                name: 'Standard Charger',
                brand: 'XYZ',
                power: '22 kW',
                port_type: 'Type 1',
                amp: '32A',
                warranty: 1,
            },
            address: {
                street_address: '456 Elm Street',
                lat: -33.9167,
                lng: 151.2333,
                suburb: 'Sydney',
                post_code: '2000',
                country: 'Australia',
            },
            name: 'Charger 2',
            number_of_stars: 5,
            number_of_rating: '50',
            renter: 2,
        },
        {
            charger_type: {
                image: null,
                name: 'Ultra Charger',
                brand: 'FastCharge',
                power: '100 kW',
                port_type: 'Type 3',
                amp: '250A',
                warranty: 3,
            },
            address: {
                street_address: '789 Oak Avenue',
                lat: -33.8679,
                lng: 151.2090,
                suburb: 'Sydney',
                post_code: '2000',
                country: 'Australia',
            },
            name: 'Charger 3',
            number_of_stars: 3,
            number_of_rating: '75',
            renter: 1,
        },
    ];

    const handleMapClick = (e) => {
        if (onMapClick) onMapClick(e.latLng.lat(), e.latLng.lng());
    }

    const showChargerInfo = (charger) => {
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
                    sampleChargers.map(charger => {
                        console.log('Rendering marker for:', charger.name);
                        return (
                            <Marker
                                key={charger.name}
                                position={{ lat: charger.address.lat, lng: charger.address.lng }}
                                onClick={() => showChargerInfo(charger)}
                                icon={{
                                    url: markerImage,
                                    scaledSize: new window.google.maps.Size(30, 30),
                                }}
                            />
                        );
                    })
                }

            </GoogleMap>
        </div>
    );
}

export default GoogleMapComponent