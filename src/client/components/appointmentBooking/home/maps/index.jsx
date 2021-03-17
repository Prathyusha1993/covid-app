import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
//import withScriptjs from "react-google-maps/lib/withScriptjs";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import {locations} from "./locationData";

const Maps = () => {
    const [selected, setSelected] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

	const mapStyles = {
		height: "100vh",
		width: "100%",
	};

	const defaultCenter = {
		lat: 38.907192,
		lng: -77.036873,
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyCq8vVmt0ls7bTWUoqBhbITd5_Xvi8u2qY">
			<GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
				{locations.map((item) => {
					return (
                    <Marker key={item.name} 
                    position={item.location}
                    onClick={() => onSelect(item)} />
                    )
				})}
                {
                    selected.location && (
                        <InfoWindow 
                        position={selected.location}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.name}</p>
                        </InfoWindow>
                    )
                }
			</GoogleMap>
		</LoadScript>
	);
};

export default Maps;
