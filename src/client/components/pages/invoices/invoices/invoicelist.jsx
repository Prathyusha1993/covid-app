import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {IMG01,IMG02, IMG03, IMG04, IMG05, IMG06,IMG07,
       IMG08,IMG09,IMG00,DOCTORTHUMB01 } from './img';
import InvoiceSidebar from '../sidebar.jsx';
class InvoiceList extends Component{
    render(){
        return(
           <>
           <InvoiceSidebar/>
            {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Invoices</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Invoices</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img src={DOCTORTHUMB01} alt="User Image" />
                      </a>
                      <div className="profile-det-info">
                        <h3>Dr. Fred Ortego</h3>
                        <div className="patient-details">
                          <h5 className="mb-0">BDS, MDS - Oral &amp; Maxillofacial Surgery</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <a href="doctor-dashboard.html">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="appointments.html">
                            <i className="fas fa-calendar-check" />
                            <span>Appointments</span>
                          </a>
                        </li>
                        <li>
                          <a href="my-patients.html">
                            <i className="fas fa-user-injured" />
                            <span>My Patients</span>
                          </a>
                        </li>
                        <li>
                          <a href="schedule-timings.html">
                            <i className="fas fa-hourglass-start" />
                            <span>Schedule Timings</span>
                          </a>
                        </li>
                        <li className="active">
                          <a href="invoices.html">
                            <i className="fas fa-file-invoice" />
                            <span>Invoices</span>
                          </a>
                        </li>
                        <li>
                          <a href="reviews.html">
                            <i className="fas fa-star" />
                            <span>Reviews</span>
                          </a>
                        </li>
                        <li>
                          <a href="chat-doctor.html">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-profile-settings.html">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="social-media.html">
                            <i className="fas fa-share-alt" />
                            <span>Social Media</span>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-change-password.html">
                            <i className="fas fa-lock" />
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <i className="fas fa-sign-out-alt" />
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* /Profile Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card card-table">
                  <div className="card-body">
                    {/* Invoice Table */}
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Invoice No</th>
                            <th>Patient</th>
                            <th>Amount</th>
                            <th>Paid On</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0010</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG00} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">George Anderson <span>#PT0016</span></a>
                              </h2>
                            </td>
                            <td>$450</td>
                            <td>14 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0009</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG01} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Megan Bird <span>#PT0001</span></a>
                              </h2>
                            </td>
                            <td>$200</td>
                            <td>13 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0008</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG02} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Alvin Boykin <span>#PT0002</span></a>
                              </h2>
                            </td>
                            <td>$100</td>
                            <td>12 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0007</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG03} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Nicholas Hicks <span>#PT0003</span></a>
                              </h2>
                            </td>
                            <td>$350</td>
                            <td>11 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0006</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG04} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Sherri McCarthy <span>#PT0004</span></a>
                              </h2>
                            </td>
                            <td>$275</td>
                            <td>10 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0005</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG05} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Roger Loyd <span>#PT0005</span></a>
                              </h2>
                            </td>
                            <td>$600</td>
                            <td>9 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0004</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG06} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Francis Giordano <span>#PT0006</span></a>
                              </h2>
                            </td>
                            <td>$50</td>
                            <td>8 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0003</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG07} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Kate Mason <span>#PT0007</span></a>
                              </h2>
                            </td>
                            <td>$400</td>
                            <td>7 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0002</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG08} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Glenn Johnson <span>#PT0008</span></a>
                              </h2>
                            </td>
                            <td>$550</td>
                            <td>6 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="invoice-view.html">#INV-0001</a>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="patient-profile.html" className="avatar avatar-sm mr-2">
                                  <img className="avatar-img rounded-circle" src={IMG09} alt="User Image" />
                                </a>
                                <a href="patient-profile.html">Monty Smith <span>#PT0009</span></a>
                              </h2>
                            </td>
                            <td>$100</td>
                            <td>5 Nov 2019</td>
                            <td className="text-right">
                              <div className="table-action">
                                <a href="invoice-view.html" className="btn btn-sm bg-info-light">
                                  <i className="far fa-eye" /> View
                                </a>
                                <a href="" className="btn btn-sm bg-primary-light">
                                  <i className="fas fa-print" /> Print
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /Invoice Table */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
           </>
        );
    }
}
export default InvoiceList;