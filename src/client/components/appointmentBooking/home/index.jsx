import React, { Component } from "react";
import HomeBanner from "./homebanner";
//import HomeSearch from "./search";
import PopularSection from "./popularsection";
//import AboutUs from "./aboutus";
import Features from "./feature";
import SearchTestLoc from "./searchtestloc";
import Maps from "./maps";
import WrappedMap from './maps';
import FinalText from "./finaltext";
//import Testimonials from "./testimonials";
//import ChooseUs from "./chooseus";
//import HomeBlog from "./blog";
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
					<SearchTestLoc />
					<br />
					<Maps/>
					<br />
					<FinalText />
					{/* <Testimonials/> */}
					{/* <ChooseUs/> */}
					{/* <HomeBlog/> */}
				</div>
			</div>
		);
	}
}
export default Home;
