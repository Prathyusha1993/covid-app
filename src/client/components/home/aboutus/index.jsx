import React, { Component } from 'react';
import { AboutUs,Feature1,Feature2,CAT04,CAT05 } from './img.jsx';

class Aboutus extends Component{
    
    render(){
       
        return(
          <section className="section aboutus-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="left">
                  <div className="section-header">
                    <h5>WHY CHOOSE US</h5>
                    <h2>We are Achieve the Success of <span>Heart Surgery</span></h2>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div className="feature-col row">
                    <div className="col-12 col-md-6">
                      <div className="feature-box">
                        <div className="corner-img"><img src={Feature1} alt="" /></div>
                        <h2>870+</h2>
                        <h6>Satisfied Patients</h6>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="feature-box">
                        <div className="corner-img"><img src={Feature2} alt="" /></div>
                        <h2>1500+</h2>
                        <h6>Patient/Year</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="right">
                  <img src={AboutUs} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    }
}
export default Aboutus;