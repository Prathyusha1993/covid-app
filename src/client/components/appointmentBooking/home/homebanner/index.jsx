import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomeBookAppoinment extends Component{
    
    render(){
       
        return(
      <section className="section section-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
          </div>
          <div className="col-12 col-md-6">
            <div className="banner-wrapper">
              <div className="banner-header">
                <h5>Covid 19 Rt-PCR Testing</h5>
                <h1>Results within 24 hours <br /><span>simple 4 step process</span></h1>
                <p>Book an appointment with a physician at one of our partner locations and get your results within 24 hours!</p>
                <div className="btn-col">
                  <ul>
                    {/* <li><Link to="/patient/search-doctor" className="btn btn-fill">Find The Nearest Location</Link></li> */}
                    {/* <li><Link to="/login" className="btn btn-notfill">Contact Us</Link></li> */}
                    <li><a href="#search-map" className="btn btn-fill">Find Nearest Location</a></li>
                  </ul>
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
export default HomeBookAppoinment;