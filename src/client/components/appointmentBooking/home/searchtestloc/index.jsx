import React, { Component } from "react";
//import { SPEC03, SPEC01, SPEC02, solution2,solution1, solution3 } from './img.jsx';
//slider
import { Link } from "react-router-dom";
import Slider from "react-slick";

class SearchTestLoc extends Component {
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
						<h5>"Search Rt-PCR test provider locations"</h5>
						<h2>"Find the nearest location to you and book a Covid 19 test"</h2>
						<p className="sub-title">
							You will receive your results within 24 hours of getting your
							Rt-PCR Nasal Swab test from one of our providers."
						</p>
					</div>
				</div>
			</section>
		);
	}
}
export default SearchTestLoc;