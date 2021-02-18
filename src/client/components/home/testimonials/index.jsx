import React, { Component } from "react";
import { Blockquotes, Patient, Patient1, Patient2, Patient3, Patient4, Patient5,Patient6 } from "./img.jsx";
//slider
import Slider from "react-slick";

class HomeFeatures extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "10px",
      arrows: false,
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
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              
            }
        }
    ]
    };
    return (
      <section className="testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h5>TESTIMONIALS</h5>
            <h2>What Patient say about us</h2>
            <p className="sub-title">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Slider */}
              <div className="testimonials-slider slider">
                {/* Slider Item */}
                <Slider {...settings}>
                  <div>
                <div className="testimonials-item">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img src={Patient} alt="" width={83} className="rounded-circle" />
                        </div>
                        <div className="patient-details">
                          <h5>Ami Smith</h5>
                          <h6>Heart Implant</h6>
                        </div>
                        <div>
                          <img src={Blockquotes} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    </div>
                  </div>	
                </div></div>
                {/* /Slider Item */}
                {/* Slider Item */}
                <div>
                <div className="testimonials-item">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img src={Patient1} alt="" width={83} className="rounded-circle" />
                        </div>
                        <div className="patient-details">
                          <h5>Brian Burcham</h5>
                          <h6>Heart Implant</h6>
                        </div>
                        <div>
                          <img src={Blockquotes} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    </div>
                  </div>	
                </div>	</div>				
                {/* /Slider Item */}
                {/* Slider Item */}
                <div>
                <div className="testimonials-item">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img src={Patient2} alt="" width={83} className="rounded-circle" />
                        </div>
                        <div className="patient-details">
                          <h5>James Smith</h5>
                          <h6>Heart Implant</h6>
                        </div>
                        <div>
                          <img src={Blockquotes} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    </div>
                  </div>	
                </div>			</div>		
                {/* /Slider Item */}
                {/* Slider Item */}
                <div>
                <div className="testimonials-item">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img src={Patient3} alt="" width={83} className="rounded-circle" />
                        </div>
                        <div className="patient-details">
                          <h5>Ana Proctor</h5>
                          <h6>Heart Implant</h6>
                        </div>
                        <div>
                          <img src={Blockquotes} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    </div>
                  </div>	
                </div>				</div>	
                {/* /Slider Item */}
                {/* Slider Item */}
                <div>
                <div className="testimonials-item">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img src={Patient4} alt="" width={83} className="rounded-circle" />
                        </div>
                        <div className="patient-details">
                          <h5>Joseph Butler</h5>
                          <h6>Heart Implant</h6>
                        </div>
                        <div>
                          <img src={Blockquotes} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    </div>
                  </div>	
                </div></div>				
                {/* /Slider Item */}
                {/* Slider Item */}
                <div>
                <div className="testimonials-item">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img src={Patient5} alt="" width={83} className="rounded-circle" />
                        </div>
                        <div className="patient-details">
                          <h5>Anna Norton</h5>
                          <h6>Heart Implant</h6>
                        </div>
                        <div>
                          <img src={Blockquotes} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    </div>
                  </div>	
                </div></div>				
                {/* /Slider Item */}
                {/* Slider Item */}
                <div>
                <div className="testimonials-item">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <img src={Patient6} alt="" width={83} className="rounded-circle" />
                        </div>
                        <div className="patient-details">
                          <h5>Bryce Cotten</h5>
                          <h6>Heart Implant</h6>
                        </div>
                        <div>
                          <img src={Blockquotes} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>
                    </div>
                  </div>	
                </div></div>	
                </Slider>			
                {/* /Slider Item */}
              </div>
              {/* /Slider */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomeFeatures;
