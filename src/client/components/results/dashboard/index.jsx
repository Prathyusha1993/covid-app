import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
import { Tab, Tabs } from "react-bootstrap";
import StickyBox from "react-sticky-box";
//import Header from '../../results/header/index';
// import { Document, Page } from "react-pdf";
// import Pdf from './pdf';
// import {
//   IMG01,
//   IMG02,
//   IMG03,
//   IMG04,
//   IMG05,
//   IMG06,
//   IMG07,
//   IMG08,
//   IMG09,
//   IMG10
//   SamplePDF
// } from "./img";
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: 1,
		};
		this.handleSelect = this.handleSelect.bind(this);
	}
	handleSelect(key) {
		this.setState({ key });
	}
	render() {
		return (
			<div>
				{/* <Header /> */}
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
											<Tabs
												className="tab-view"
												activeKey={this.state.key}
												onSelect={this.handleSelect}
												id="controlled-tab-example"
											>
												<Tab
													className="nav-item"
													eventKey={1}
													title="01 Feb 2021"
												>
													{/* <Pdf></Pdf> */}
													<iframe
														src="http://3.137.173.35:3000/files/04d4660dfd83ff.pdf"
														height="500"
														width="900"
														title="Iframe Example"
													></iframe>
												</Tab>
												<Tab
													className="nav-item"
													eventKey={1}
													title="02 Feb 2021"
												></Tab>
												<Tab
													className="nav-item"
													eventKey={1}
													title="05 Feb 2021"
												></Tab>
												<Tab
													className="nav-item"
													eventKey={1}
													title="10 Feb 2021"
												></Tab>
												<Tab
													className="nav-item"
													eventKey={1}
													title="12 Feb 2021"
												></Tab>
												<Tab
													className="nav-item"
													eventKey={1}
													title="13 Feb 2021"
												></Tab>
												<Tab
													className="nav-item"
													eventKey={1}
													title="15 Feb 2021"
												>
													<iframe
														src="https://oneportal.dsimed.com/DSIPortal/HelpGuides/One%20Portal%20Best%20Practices%20eScreen%20OR%20Alere%20clients.pdf"
														height="500"
														width="900"
														title="Iframe Example"
													></iframe>
												</Tab>
                                                <Tab
													className="nav-item"
													eventKey={1}
													title="13 Feb 2021"
												></Tab>
                                                <Tab
													className="nav-item"
													eventKey={1}
													title="13 Feb 2021"
												></Tab>
                                                <Tab
													className="nav-item"
													eventKey={1}
													title="13 Feb 2021"
												></Tab>
											</Tabs>
											
										</div>
									</div>
								</div>
								{/* <div className="time-slot">
                  <ul className="clearfix">
                    <li>
                      <Link className="timing" to="#0">
                        <span>1 Feb 2021</span> 
                      </Link>
                    
                    </li>
                    <li>
                      <Link className="timing" to="#0">
                        <span>2 Feb 2021</span> 
                      </Link>
                     
                    </li>
                    <li>
                      <Link className="timing" to="#0">
                        <span>3 Feb 2021</span> 
                      </Link>
                      
                    </li>
                    <li>
                      <Link className="timing" to="#0">
                        <span>4 Feb 2021</span> 
                      </Link>
                      
                    </li>
                    <li>
                      <Link className="timing" to="#0">
                        <span>5 Feb 2021</span> 
                      </Link>
                      
                    </li>
                    <li>
                      <Link className="timing" to="#0">
                        <span>6 Feb 2021</span> 
                      </Link>
                   
                    </li>
                    <li>
                      <Link className="timing" to="#0">
                        <span>7 Feb 2021</span> 
                      </Link>
                      
                    </li>
                  </ul>
                </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Dashboard;
