import React, { Component } from "react";
//import { SPEC03, SPEC01, SPEC02, solution2,solution1, solution3 } from './img.jsx';
//slider
import { Link } from "react-router-dom";
import Slider from "react-slick";

class Popularsection extends Component {
	render() {
		const settings = {
			width: 400,
			dots: false,

			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerPadding: "10px",
			arrows: true,
			centerMode: true,
			responsive: [
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					},
				},
			],
		};
		return (
			<section className="section popular-section" id="search-location">
				<div className="container">
					<div className="section-header text-center">
						<h5>Our simple 4 step process</h5>
						<h2>Results within 24 hours of Swab</h2>
						<p className="sub-title">
							We make it simple to book an appointment. Find a location, book a
							time, get a swab and wait for results.
						</p>
					</div>
				</div>
			</section>
		);
	}
}
export default Popularsection;
