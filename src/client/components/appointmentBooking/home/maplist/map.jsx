
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx";
//import Iconmap from '../../../../assets/images/marker.png';
import { serviceConstants } from "../../../../appointmentBookingServices/constants";

export class GoogleMapsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		};
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props.place_,
			activeMarker: marker,
			showingInfoWindow: true,
		});
	};

	showDetails = (place) => {};

	render() {
		return (
			<div className="map-container">
				<Map
					google={this.props.google}
					className={"map"}
					zoom={10}
					initialCenter={this.props.center}
				>
					{this.props.places.map((place, i) => {
						return (
							<Marker
								onClick={this.onMarkerClick}
								key={place.id}
								place_={place}
								position={{ lat: place.lat, lng: place.lng }}
							/>
						);
					})}
					<InfoWindowEx
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
					>
						<div
							className="profile-widget"
							style={{ width: "100%", display: "inline-block" }}
						>
							<div className="doc-img">
								<a
									href={this.state.selectedPlace.bookingLink}
									tabIndex={0}
									target="_blank"
								>
									<img
										style={{ height: "auto", width: "200px" }}
										alt={this.state.selectedPlace.name}
										src={this.state.selectedPlace.image}
									/>
								</a>
							</div>
							<div className="pro-content">
								<h3 className="title">
									<a
										href={this.state.selectedPlace.bookingLink}
										tabIndex={0}
										target="_blank"
									>
										{" "}
										{this.state.selectedPlace.name}{" "}
									</a>
								</h3>
								<p className="speciality">
									{" "}
									Virtual Visit Required for COVID-19 Tests{" "}
								</p>
								<ul className="available-info">
									<li>
										<i className="fas fa-map-marker-alt" />
										{this.state.selectedPlace.address}
									</li>
								</ul>
							</div>
						</div>
					</InfoWindowEx>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: `${serviceConstants.GOOGLE_API_KEY}`,
})(GoogleMapsContainer);
