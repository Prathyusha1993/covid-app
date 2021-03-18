import React, { Component } from "react";
import HomeBanner from "./homebanner";
//import HomeSearch from "./search";
import PopularSection from "./popularsection";
//import AboutUs from "./aboutus";
import Features from "./feature";
import SearchTestLoc from "./searchtestloc";
//import Maps from "./maps";
import FinalText from "./finaltext";
import MapList from "./maplist";
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
					<PopularSection />
					<Features />
					<br />
					<SearchTestLoc />
					<br /> 
					<MapList/>
					<FinalText />
				</div>
			</div>
		);
	}
}
export default Home;
