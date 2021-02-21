import React, { Component } from "react";
import HomeBanner from "./homebanner";
import HomeSearch from "./search";
import PopularSection from "./popularsection";
import AboutUs from "./aboutus";
import Features from "./feature";
import Testimonials from "./testimonials";
import ChooseUs from "./chooseus";
import HomeBlog from "./blog";
// import { Doctor07,ImgPharmacy1,LabImage } from "./image.jsx";

class Home extends Component {
	render() {
		return (
			<div>
				<div className="main-wrapper">
					<HomeBanner />
					{/* <HomeSearch />     */}
					<PopularSection />
					{/* <AboutUs /> */}
					<Features />
					<br />
					{/* <Testimonials/> */}
					{/* <ChooseUs/> */}
					{/* <HomeBlog/> */}
				</div>
			</div>
		);
	}
}
export default Home;
