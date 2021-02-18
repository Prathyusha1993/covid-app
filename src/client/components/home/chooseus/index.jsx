import React, { Component } from 'react';
import { CHECKMARK } from './img.jsx';

class ChooseUs extends Component{
    
    render(){
       
        return(
            <section className="choose-us">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="left">
                <div className="section-header">
                  <h5>OUR BENEFITS</h5>
                  <h2>Choose Our Cardiology <br />Healthcare Solutions</h2>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="choose-col">
                      <div className="top-title d-flex align-items-center">
                        <span><img src={CHECKMARK} alt="" /></span>
                        <span>Expert Nursing</span>
                      </div>
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="choose-col">
                      <div className="top-title d-flex align-items-center">
                        <span><img src={CHECKMARK} alt="" /></span>
                        <span>Heath care Expert</span>
                      </div>
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="choose-col">
                      <div className="top-title d-flex align-items-center">
                        <span><img src={CHECKMARK} alt="" /></span>
                        <span>Individual Approach</span>
                      </div>
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="choose-col">
                      <div className="top-title d-flex align-items-center">
                        <span><img src={CHECKMARK} alt="" /></span>
                        <span>Emergency Help</span>
                      </div>
                      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="right">
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}
export default ChooseUs;