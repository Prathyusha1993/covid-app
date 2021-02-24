import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dates extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log("date result", JSON.stringify(this.props));
		return (
			<div className="time-slot">
				{/* <h6>dates</h6> */}
				{this.props.result.map((item, index) => {
					return (<ul className="clearfix">
						<li>
							<Link className="timing" to="#0">
								<span>{item.results.result_date}</span>
							</Link>
						</li>
					</ul>);
				})}
			</div>
		);
	}

    
}

export default Dates;
