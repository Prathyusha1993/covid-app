import React, { Component } from "react";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Dates from "./dates/index";
import PdfViewer from "./pdfViewer/index";
import { serviceConstants } from "../../../services/common/constants";
import { fetchDashboardDetails,resultsViewed } from "../../../services/patientPortalServices/dashboardService";

class PatientPortalDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      result: [],
      pdfPath: "",
      selectedDateId: "",
      orderDates: [],
      value: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({ key });
  }

  componentDidMount() {
    const patientId = window.localStorage.getItem("PATIENT_ID");
    var patientInfo = { patient_id: patientId };
    fetchDashboardDetails(patientInfo).then((data) => {
      if (data.data != null && data.data.length > 0) {
        this.setState({
          result: data.data,
          selectedDateId: data.data[0]._id,
          pdfPath:
            data.data[0].results != null &&
            data.data[0].results.pdf_path != null &&
            data.data[0].results.pdf_path.length > 0
              ? `${serviceConstants.HOST_NAME}${data.data[0].results.pdf_path}`
              : "",
        });
      } else {
        this.setState({
          result: null,
          selectedDateId: "",
          pdfPath: "",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleDateClick = (pdfPath, dateId, dataValue) => {
    resultsViewed({"_id": dateId});
    // const constructedUrl = `${serviceConstants.HOST_NAME}${pdfPath}`;
    var constructedUrl = "";

    if (pdfPath != null && pdfPath.trim().length > 0)
      constructedUrl = `${serviceConstants.HOST_NAME}${pdfPath}`;

    this.setState({
      pdfPath: constructedUrl,
      selectedDateId: dateId,
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
                      {this.state.result != null ? (
                        <div>
                          <Dates
                            result={this.state.result}
                            handleDateClick={this.handleDateClick}
                            selectedDateId={this.state.selectedDateId}
                          />
                          <br />
                          <PdfViewer
                            pdfPath={this.state.pdfPath}
                            value={this.state.value}
                          />
                        </div>
                      ) : (
                        <label> No results </label>
                      )}
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
