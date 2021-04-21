import React, { Component } from "react";

class SearchTestLoc extends Component {
  render() {
    return (
      <section className="section popular-section" id="search-provider">
        <div className="container">
          <div className="section-header text-center">
            {/* <h5>Search for a COVID-19 Rt-PCR testing provider near you</h5>
						<h2>Find the nearest location then book an appointment</h2>
						<p className="sub-title">
							You will receive your results between 12 to 24 hours of getting
							your COVID-19 Rt-PCR nasal swab test from one of our providers in
							the map below.
						</p> */}

            <h2>Find your nearest location</h2>
            <p className="sub-title">
              Book an appointment with a physician at one of our partner
              locations and you will have your results within 24 hours!
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default SearchTestLoc;
