import React from "react";
//import config from 'config';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./client/components/header.jsx";
import Footer from "./client/components/footer.jsx";
import TopHeader from "./client/components/topheader.jsx";
//import Home from "./client/components/home/index";

//Home Appointment Booking
import Home from "./client/components/appointmentBooking/home/index";
// import Home1 from "./client/components/home/home1";
// import Home2 from "./client/components/home/home2";
// import HomeSlider1 from "./client/components/home/homeslider1";
// import HomeSlider2 from "./client/components/home/homeslider2";

import BlankPage from "./client/components/blankpage";
//Patient Portal
import PatientPortalDashboard from "./client/components/patientPortal/dashboard";
import PatientPortalLoginContainer from "./client/components/patientPortal/login";
import PatientPortalHeader from "./client/components/patientPortal/header";

//Clinic Portal
import ClinicPortalLoginContainer from "./client/components/clinicPortal/login";
import ClinicPatientGrid from "./client/components/clinicPortal/patientSearch/clinicPatientGrid/index";
import OrderGridDetails from "./client/components/clinicPortal/orderSearch/orderGridDetails/index";

//import AppUniversal from "./admin/app-universal";

const AppContainer = function (props) {
	if (props) {
		const url = props.location.pathname.split("/")[1];

		return (
			<Router
			//basename={`${config.publicPath}`}       by p - commented
			>
				<div>
					{url === "patientportal" || url === "clinic" ? (
						<Route render={(props) => <PatientPortalHeader {...props} />} />
					) : (
						<Route render={(props) => <Header {...props} />} />
					)}

					<Switch>
						<Route
							path="/patientportal"
							exact
							component={PatientPortalLoginContainer}
						/>
						<Route
							path="/patientportal/dashboard"
							exact
							component={PatientPortalDashboard}
						/>
						<Route
							path="/clinic"
							exact
							component={ClinicPortalLoginContainer}
						/>
						<Route
							path="/clinic/patients"
							exact
							component={ClinicPatientGrid}
						/>
						<Route
							path="/clinic/orders"
							exact
							component={OrderGridDetails}
						/>
						
						<Route path="(/|/home)" exact component={Home} />

						
						
					</Switch>
					<Route render={(props) => <Footer {...props} />} />
					
				</div>
			</Router>
		);
	}
	return null;
};

export default AppContainer;
