import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx";
import { serviceConstants } from "../../../../services/common/constants";
import { locations } from "./data";

export class GoogleMapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markerObjects: [],
    };
    this.markerBounce = this.markerBounce.bind(this);
  }

	onMarkerMounted = (element) => {
		this.setState((prevState) => ({
			markerObjects: [...prevState.markerObjects, element],
		}));
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: marker.place_,
			activeMarker: marker,
			showingInfoWindow: true,
		});
	};

	showDetails = (place) => {};

  markerBounce = (id) => {
    var element = this.state.markerObjects.find((i) => {
      return i.marker.id == id;
      //return i.marker.id == this.props.places.id;
    });
    //console.log(element);

		this.setState({
			selectedPlace: element.marker.place_,
			activeMarker: element.marker,
			showingInfoWindow: true,
		});
	};

	render() {
		return (
			<section className="choose-us">
				<div style={{ marginRight: "40px", marginLeft: "20px" }}>
					<div className="row">
						<div
							className="col-12 col-lg-4"
							style={{ overflowY: "scroll", height: "100vh", width: "100%" }}
						>
							<div className="left">
								{locations.map((item, index) => {
									return (
										<div className="card" key={item.name}>
											<div className="card-body">
												<div className="doctor-widget">
													<div className="doc-info-left">
														<div className="doctor-img">
															<img
																src={item.image}
																className="img-fluid"
																alt="User"
															/>
														</div>
														<div className="doc-info-cont">
															<h4 className="doc-name">
																<a
																	href="#0"
																	onClick={() => this.markerBounce(item.id)}
																>
																	{item.name}
																</a>
															</h4>

															<div className="clinic-details">
																<p className="doc-location">
																	<i className="fas fa-map-marker-alt"></i>{" "}
																	{item.address}
																	<br />
																	<br />
																	{item.timings1}
																	<br />
																	{item.timings2}
																	<br />
																	<i className="fas fa-phone"></i>{" "}
																	{item.contactNumber}
																</p>
																{item.bookingLink &&
																item.bookingLink.length > 0 ? (
																	<div className="clinic-booking">
																		<a
																			className="apt-btn"
																			href={item.bookingLink}
																			target="_blank"
																		>
																			Book Appointment
																		</a>
																	</div>
																) : (
																	<div></div>
																)}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="col-12 col-lg-8">
							<div className="right">
								<div id="map" className="map-listing">
									<div style={{ height: "100vh", width: "100%" }}>
										{/* <Map
                      places={locations}
                      center={{
                        lat: 38.91266781734994,
                        lng: -77.0380624604176,
                      }}
                    /> */}
										<div className="map-container">
											<Map
												google={this.props.google}
												className={"map"}
												zoom={10}
												initialCenter={{
													lat: 38.91266781734994,
													lng: -77.0380624604176,
												}}
											>
												{locations.map((place, i) => {
													return (
														<Marker
															onClick={this.onMarkerClick}
															key={place.id}
															id={place.id}
															place_={place}
															// name={place.id}
															position={{ lat: place.lat, lng: place.lng }}
															ref={this.onMarkerMounted}
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: `${serviceConstants.GOOGLE_API_KEY}`,
})(GoogleMapsContainer);
