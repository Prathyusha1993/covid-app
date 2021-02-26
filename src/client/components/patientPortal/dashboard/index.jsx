import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
import { Tab, Tabs } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import Dates from "./dates/index";
import PdfViewer from "./pdfViewer/index";
import { serviceConstants } from "../../../patientPortalServices/constants";
import { fetchDashboardDetails } from "../../../patientPortalServices/dashboardService";
//import Header from '../../results/header/index';

class PatientPortalDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: 1,
			result: [],
			// pdfPath:
			// 	"https://oneportal.dsimed.com/DSIPortal/HelpGuides/One%20Portal%20Best%20Practices%20eScreen%20OR%20Alere%20clients.pdf",
			pdfPath:"",
			selectedDate: "",
			orderDates: [],
			value: "",
		};
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(key) {
		this.setState({ key });
	}

	// handleOrderDashboardData = (patient_id) => {
	// 	const patientId = window.localStorage.getItem("PATIENT_ID");
	// 	const requestOptions = {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({ patient_id: patient_id }),
	// 	};
	// 	fetch(`${serviceConstants.HOST_NAME}/order/v1/search`, requestOptions)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			// console.log('server response', JSON.stringify(data));
	// 			console.log('server response result', JSON.stringify(data.data));
	// 			this.setState({ result: data.data });
	// 		});
	// }

	componentDidMount() {
		//this.handleOrderDashboardData();
		fetchDashboardDetails().then((data) => {
			console.log("server response result", JSON.stringify(data.data));
			this.setState({
				result: data.data,
				selectedDate: data.data[0].order_date,
				pdfPath: `${serviceConstants.HOST_NAME}${data.data[0].results.pdf_path}`
			});
		});
	}

	handleDateClick = (pdfPath, date, dataValue) => {
		console.log("date clicked is", pdfPath);
		// const constructedUrl = 'https://oneportal.dsimed.com/DSIPortal/HelpGuides/One%20Portal%20Best%20Practices%20eScreen%20OR%20Alere%20clients.pdf';

		const constructedUrl = `${serviceConstants.HOST_NAME}${pdfPath}`;

		this.setState({
			pdfPath: constructedUrl,
			selectedDate: date,
			value: dataValue,
		});
	};

	render() {
		return (
			<div>
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="/home">Home</a>
										</li>
										<li className="breadcrumb-item active" aria-current="page">
											Dashboard
										</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Dashboard</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<StickyBox offsetTop={20} offsetBottom={20}>
									<DashboardSidebar />
								</StickyBox>
							</div>
							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card schedule-widget mb-0">
									<div className="schedule-header">
										<div className="schedule-nav">
											<Dates
												result={this.state.result}
												handleDateClick={this.handleDateClick}
												selectedDate={this.state.selectedDate}
											/>
											<br />
											<PdfViewer pdfPath={this.state.pdfPath} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default PatientPortalDashboard;
