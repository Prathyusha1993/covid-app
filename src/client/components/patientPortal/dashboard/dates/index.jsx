import React, { Component } from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../../../../util";

class Dates extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="time-slot">
				<ul className="clearfix">
					{this.props.result.map((item, index) => {
						let linkClassName = "timing";
						if (this.props.selectedDateId === item._id) {
							linkClassName = "timing selected";
						}
						return (
							<span key={index}>
								<li style={{ marginBottom: "10px" }}>
									<Link
										className={linkClassName}
										to="#0"
										id={item._id}
										key={item._id}
										onClick={() => {
											this.props.handleDateClick(
												item.results != null ? item.results.pdf_path : "",
												//item.order_date,
												item._id,
												item.results != null ? item.results.value : ""
											);
										}}
									>
										<span>{parseDate(item.order_date)}</span>
									</Link>
								</li>
							</span>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Dates;
