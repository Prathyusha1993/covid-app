import React, { Component } from "react";
//import { CHECKMARK } from './img.jsx';
import { Link } from "react-router-dom";
import Map from "./map";
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
				
			>
				<div style={{ marginRight: "40px",marginLeft:"20px" }}>
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
															<h4 className="doc-name">{item.name}</h4>
															
															<div className="clinic-details">
																<p className="doc-location">
																	<i className="fas fa-map-marker-alt"></i>{" "}
																	{item.address}<br/><br/>
																	{item.timings1}<br/>
																	{item.timings2}<br/>
																	<i className="fas fa-phone"></i>{" "}{item.contactNumber}
																</p>
																<div className="clinic-booking">
																	<a
																		className="apt-btn"
																		href={item.bookingLink}
																		target="_blank"
																	>
																		Book Appointment
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
								{/* <div className="load-more text-center">
									<a href="#0" className="btn btn-primary btn-sm">
										Load More
									</a>
								</div> */}
							</div>
						</div>
						<div className="col-12 col-lg-8">
							<div className="right">
								<div id="map" className="map-listing">
									<div style={{ height: "100vh", width: "100%" }}>
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
