import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon

import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/logo.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import { useEffect } from "react";
import AGT_MCN_LOGO from "../assets/images/results/agt-mcn-logo.png";

const Header = (props) => {
  let pathnames = window.location.pathname

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

  console.log("sreevidhya "+url+" "+pathnames)
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
          <Link to="/home" className="navbar-brand logo">
            {/* <img src={logo} className="img-fluid" alt="Logo" /> by p - commented*/}
            <img src={AGT_MCN_LOGO} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/home" className="menu-logo">
              <img src={AGT_MCN_LOGO} className="img-fluid" alt="Logo" /> 
              {/* <h4>MY COVID NOW</h4> */}
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
            {/* <li className={pathnames.includes("/home") ? "active" : ""}><Link to="/home">Home</Link></li> */}
            {/* by p - need to change the paths once we get more detials */}
              
            {/* <li className={`has-submenu ${url.includes("/doctor") ? "active" : ""}`}>
              <a href="#0">
                For Teams 
              </a>
            </li> */}
            {/* <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
              <a href="#0">
                view Results
              </a>
            </li> */}
            <li className={`has-submenu ${url.includes("/patientportal") ? "active" : ""}`}>
              <a href="/patientportal">
                view Results
              </a>
            </li>
            {/* <li >
              <Link href="/patientportal" to="/patientportal">view Results</Link>
            </li> */}
            {/* <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
              <a href="">Get Help Booking<i className="fas fa-chevron-down"></i>
              </a>
              <ul className="submenu">
                <li className={pathnames.includes("blog-list") ? "active" : ""}>
                  <Link to="/blog/blog-list" onClick={()=>onhandleCloseMenu()}>Blog List</Link>
                </li>
                <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                  <Link to="/blog/blog-grid" onClick={()=>onhandleCloseMenu()}>Blog Grid</Link>
                </li>
                <li className={pathnames.includes("blog-details") ? "active" : ""}>
                  <Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog Details</Link>
                </li>
              </ul>
            </li> */}
            {/* <li><Link href="/admin" target="_blank" to="/admin">Admin</Link></li> by p - commented */}
            {/* <li>
              <a href="/admin" target="_blank" to="/admin">
                Admin
              </a>
            </li> */}
            <li className="login-link" onClick={()=>onhandleCloseMenu()}>
              <Link to="/">BOOK AN APPOINTMENT</Link>
            </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
          {/* <li className="nav-item contact-item">
            <div className="header-contact-img">
              <i className="far fa-hospital" />							
            </div>
            <div className="header-contact-detail">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header"> +1 315 369 5943</p>
            </div>
          </li> by p - commented*/}

          {/* {(props.location.pathname) === ("/pages/voice-call") || (props.location.pathname) === ("/pages/video-call") ? (
            <>
              <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img
                    className="rounded-circle"
                    src={IMG01}
                    width="31"
                    alt="Darren Elder"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={IMG01}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <Dropdown.Item href="/doctor/doctor-dashboard">
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item href="/doctor/profile-setting">
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href="/login">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : ( by p - commented */}
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link header-login">
                  BOOK AN APPOINTMENT {" "}
                </Link>
              </li>{" "}
            </>
          {/* )} by p - commented*/}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
