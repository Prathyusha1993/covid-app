import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";
import AGT_MCN_LOGO from "../assets/images/results/agt-mcn-logo.png";
import AGT_LOGO from "../assets/images/results/agt-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DOC_IMG from "../assets/images/doctors/doctor-thumb-02.jpg";

const Header = (props) => {
	let pathnames = window.location.pathname;

	const [active, setActive] = useState(false);
	const url = pathnames.split("/").slice(0, -1).join("/");

	const onHandleMobileMenu = () => {
		var root = document.getElementsByTagName("html")[0];
		root.classList.add("menu-opened");
	};

	const onhandleCloseMenu = () => {
		var root = document.getElementsByTagName("html")[0];
		root.classList.remove("menu-opened");
	};

	// useEffect(() => {
	//   $(".main-nav a").on("click", function (e) {
	//     if ($(this).parent().hasClass("has-submenu")) {
	//       e.preventDefault();
	//     }
	//     if (!$(this).hasClass("submenu")) {
	//       $("ul", $(this).parents("ul:first")).slideUp(350);
	//       $("a", $(this).parents("ul:first")).removeClass("submenu");
	//       $(this).next("ul").slideDown(350);
	//       $(this).addClass("submenu");
	//     } else if ($(this).hasClass("submenu")) {
	//       $(this).removeClass("submenu");
	//       $(this).next("ul").slideUp(350);
	//     }
	//   });
	// }, []);

	//  console.log("sreevidhya "+url+" "+pathnames)
	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg header-nav">
				<div className="navbar-header">
					<a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
						<span className="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<Link
						to="/home"
						className="navbar-brand "
						style={{ marginRight: "100px" }}
					>
						{/* <img src={AGT_MCN_LOGO} className="img-fluid" alt="Logo" /> */}
						<img
							src={AGT_MCN_LOGO}
							width="400"
							height="45"
							object-fit="cover"
							alt=""
						/>
					</Link>
				</div>
				<div className="main-menu-wrapper">
					<div className="menu-header">
						<Link to="/home" className="menu-logo">
							{/* <img src={AGT_MCN_LOGO} className="img-fluid" alt="Logo" />  */}
							<img
								src={AGT_MCN_LOGO}
								width="400"
								height="45"
								object-fit="cover"
								alt=""
							/>
						</Link>
						<a
							href="#0"
							id="menu_close"
							className="menu-close"
							onClick={() => onhandleCloseMenu()}
						>
							<i className="fas fa-times"></i>
						</a>
					</div>
					<ul className="main-nav">
						<li className="nav-item">
							<a href="/patientportal" className="top-nav-button">
								{" "}
								View My Results{" "}
							</a>
						</li>{" "}
						<li className="nav-item">
							<a href="/clinic" className="top-nav-button">
								{" "}
								Clinic Login{" "}
							</a>
						</li>{" "}
					</ul>
				</div>
				<ul className="nav header-navbar-rht">
          {(props.location.pathname) === ("/patientportal/dashboard") || (props.location.pathname) === ("/clinic/patients") || (props.location.pathname) === ("/clinic/orders") ? (
            <>
              <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img
                    className="rounded-circle"
                    src={DOC_IMG}
                    width="31"
                    alt="Darren Elder"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={DOC_IMG}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div> */}
                  <Dropdown.Item href="/doctor/profile-setting">
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href="/clinic">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <li className="nav-item">
              <img
								src={AGT_LOGO}
								width="200"
								height="70"
								object-fit="cover"
								className="d-inline-block align-top"
								alt=""
							/>
              </li>{" "}
            </>
          )}




























				</ul>
			</nav>
		</header>
	);
};

export default Header;
