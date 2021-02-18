import React, { Component } from 'react';
import { SPEC03, SPEC01, SPEC02, solution2,solution1, solution3 } from './img.jsx';
//slider
import { Link } from 'react-router-dom';
import Slider from "react-slick";
class Popularsection extends Component{
    
    render(){
        const settings = {
            width:400,
            dots:false,
          
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '10px',
            arrows: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                      
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                      
                    }
                }
            ]

          };
        return(
          <section className="section popular-section">
          <div className="container">
            <div className="section-header text-center">
              <h5>Search for a Location</h5>
              <h2>Book An Appointment Now!</h2>
              <p className="sub-title">We make it simple to book an appointment find a location, pick a time, get a swab and wait for results.</p>
            </div>
            {/* by p - commented and also for continues comment removed comment line at solution widget
            <div className="row">
              <div className="col-12">
                <div className="solution-slider slider">
                  
                <Slider {...settings}>
                  {/* Solution Widget 
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img className="img-fluid" alt="User Image" src={solution1} />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <div className="specialities-img">
                        <img src={SPEC01} alt="" />
                      </div>
                      <h5>SURGERY</h5>
                      <h3 className="title">
                        Heart Surgery
                      </h3>
                      <p className="speciality">Lorem Ipsum is simply dummy text  the printing and typesetting industry. </p>
                      <Link to="/patient/doctor-profile" className="readmore-btn"><i className="fas fa-chevron-circle-right" /> Read more</Link>
                    </div>
                  </div>
                  {/* /Solution Widget */}
                  {/* Solution Widget 
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img className="img-fluid" alt="User Image" src={solution2} />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <div className="specialities-img">
                        <img src={SPEC02} alt="" />
                      </div>
                      <h5>SAVING LIVES</h5>
                      <h3 className="title">
                        Valve Diseases
                      </h3>
                      <p className="speciality">Lorem Ipsum is simply dummy text  the printing and typesetting industry. </p>
                      <Link to="/patient/doctor-profile" className="readmore-btn"><i className="fas fa-chevron-circle-right" /> Read more</Link>
                    </div>
                  </div>
                  {/* /Solution Widget */}
                  {/* Solution Widget 
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img className="img-fluid" alt="User Image" src={solution3} />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <div className="specialities-img">
                        <img src={SPEC03} alt="" />
                      </div>
                      <h5>GREAT CARE</h5>
                      <h3 className="title">
                        Children’s services
                      </h3>
                      <p className="speciality">Lorem Ipsum is simply dummy text  the printing and typesetting industry. </p>
                      <Link to="/patient/doctor-profile" className="readmore-btn"><i className="fas fa-chevron-circle-right" /> Read more</Link>
                    </div>
                  </div>
                  {/* /Solution Widget */}
                  {/* Solution Widget 
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img className="img-fluid" alt="User Image" src={solution1} />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <div className="specialities-img">
                        <img src={SPEC01} alt="" />
                      </div>
                      <h5>SURGERY</h5>
                      <h3 className="title">
                        Heart Surgery
                      </h3>
                      <p className="speciality">Lorem Ipsum is simply dummy text  the printing and typesetting industry. </p>
                      <Link to="/patient/doctor-profile" className="readmore-btn"><i className="fas fa-chevron-circle-right" /> Read more</Link>
                    </div>
                  </div>
                  {/* /Solution Widget */}
                  {/* Solution Widget 
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img className="img-fluid" alt="User Image" src={solution2} />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <div className="specialities-img">
                        <img src={SPEC02} alt="" />
                      </div>
                      <h5>SAVING LIVES</h5>
                      <h3 className="title">
                        Valve Diseases
                      </h3>
                      <p className="speciality">Lorem Ipsum is simply dummy text  the printing and typesetting industry. </p>
                      <Link to="/patient/doctor-profile" className="readmore-btn"><i className="fas fa-chevron-circle-right" /> Read more</Link>
                    </div>
                  </div>
                  {/* /Solution Widget */}
                  {/* Solution Widget 
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <img className="img-fluid" alt="User Image" src={solution3} />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <div className="specialities-img">
                        <img src={SPEC03} alt="" />
                      </div>
                      <h5>GREAT CARE</h5>
                      <h3 className="title">
                        Children’s services
                      </h3>
                      <p className="speciality">Lorem Ipsum is simply dummy text  the printing and typesetting industry. </p>
                      <Link to="/patient/doctor-profile" className="readmore-btn"><i className="fas fa-chevron-circle-right" /> Read more</Link>
                    </div>
                  </div>
                  {/* /Solution Widget 
                  </Slider>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        );
    }
}
export default Popularsection;