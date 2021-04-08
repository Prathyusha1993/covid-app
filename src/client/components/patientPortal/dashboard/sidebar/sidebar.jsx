import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import SocialShare from "./../../../socialShare";

export const DashboardSidebar = () => {
  const dob = window.localStorage.getItem("USER_DOB");
  let ageDetails = "";
  if (dob) {
    ageDetails =
      moment(dob, "YYYY/MM/DD").format("Do MMM YYYY") +
      ", " +
      moment().diff(moment(dob, "YYYY/MM/DD"), "years") +
      " years";
  }

  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <a href="#0" className="booking-doc-img">
            {/* <img src={IMG01} alt="User" /> */}
            <i
              className="fa fa-user-circle fa-5x"
              style={{ color: "#0369b3" }}
              aria-hidden="true"
            ></i>
          </a>
          <div className="profile-det-info">
            <h3>{window.localStorage.getItem("USER_NAME")}</h3>
            <div className="patient-details">
              {dob && (
                <h5>
                  <i className="fas fa-birthday-cake"></i>
                  {ageDetails}
                </h5>
              )}
              <h5 className="mb-0">
                <i className="fas fa-map-marker-alt"></i>{" "}
                {window.localStorage.getItem("USER_ADDRESS1")}
                <br /> {window.localStorage.getItem("USER_ADDRESS2")}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li className="active">
              <Link to="/patientportal/dashboard">
                <i className="fas fa-columns"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* <li>
				<Link to="/patient/profile">
					<i className="fas fa-user-cog"></i>
					<span>Profile Settings</span>
				</Link>
			</li> */}
            {/* <li>
				<a href="/">
					<i className="fas fa-sign-out-alt"></i>
					<span>
						Logout
					</span>
				</a>
			</li> */}
            <li>
              <Link to="/patientportal/">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </Link>
            </li>
            <li>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                  textTransform: "none",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "large" }}>
                  PLEASE CONSIDER SHARING
                </span>
                <p style={{ paddingTop: "20px" }}>
                  Results to your device in less than 24 hours!
                </p>
                <p>
                  If you are satisfied with the ease and speed of getting your
                  results,please consider sharing our services.
                </p>
                <b>(NOT YOUR RESULTS)</b>
                <p> Let others know, keep people safe!</p>
              </div>
              <SocialShare />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default DashboardSidebar;
