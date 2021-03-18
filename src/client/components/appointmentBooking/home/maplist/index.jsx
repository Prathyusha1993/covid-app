import React, { Component } from "react";
//import { CHECKMARK } from './img.jsx';
import { Link } from "react-router-dom";
//import Maps from "../maps";
import Map from "./map";
import { IMG01, IMG02, IMG03, IMG04 } from "./img";
import { locations } from "./data";

class MapList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section
				className="choose-us"
				style={{ overflowY: "scroll", height: "100vh", width: "100%" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-5">
							<div className="left">
								{locations.map((item, index) => {
									return (
										<div className="card" index={item.name}>
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
															<h4 className="doc-name">{item.name}</h4>
															<p className="doc-speciality">
																Virtual Visits Required for COVID-19 Tests
															</p>
															<div className="clinic-details">
																<p className="doc-location">
																	<i className="fas fa-map-marker-alt"></i>{" "}
																	{item.address}
																</p>
																<div className="clinic-booking">
																	<a
																		className="apt-btn"
																		href={item.bookingLink}
																		target="_blank"
																	>
																		Book Appointment
																	</a>
																	{/* <Link
																		to={item.bookingLink}
																		className="apt-btn"
																	>
																		Book Appointment
																	</Link> */}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
								<div className="load-more text-center">
									<a href="#0" className="btn btn-primary btn-sm">
										Load More
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-7">
							<div className="right">
								<div id="map" className="map-listing">
									<div style={{ height: "250vh", width: "100%" }}>
										<Map
											places={locations}
											center={{ lat: 38.907192, lng: -77.036873 }}
										/>
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
export default MapList;
