import React, { Component } from "react";
import { Link } from "react-router-dom";
import { parseDate } from "../../../../../util";

class Dates extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log("date result", JSON.stringify(this.props));

		
		return (
			<div className="time-slot">
				<ul className="clearfix">
					{this.props.result.map((item, index) => {
						let linkClassName = "timing";
						if(this.props.selectedDate === item.order_date) {
							linkClassName = "timing selected"
						}
						return (
							<span>
								<li>
									<Link
										className={linkClassName}
										to="#0"
										id={item.order_date}
										key={item.order_date}
										onClick={() => {
											this.props.handleDateClick(item.results.pdf_path, item.order_date, item.results.value)
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

	// render() {
	// 	console.log("date result", JSON.stringify(this.props));
	// 	return (
	// 		<div className="time-slot">
	// 			{/* <h6>dates</h6> */}
	// 			<ul className="clearfix">
	// 				{this.props.orderDates.map((item, index) => {
	// 					return (
	// 						<span>
	// 							<li>
	// 								<Link
	// 									className="timing"
	// 									to="#0"
	// 									id={item.orderDate}
	// 									key={item.orderDate}
	// 								>
	// 									<span>{parseDate(item.orderDate)}</span>
	// 								</Link>
	// 							</li>
	// 						</span>
	// 					);
	// 				})}
	// 			</ul>
	// 		</div>
	// 	);
	// }
}

// Dates.propTypes = {
// 	orderDates: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			orderDate: PropTypes.string.isRequired,
// 		}).isRequired
// 	).isRequired,
// };

// Dates.propTypes = {
// 	orderDates: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			orderDate: PropTypes.string.isRequired,
// 		}).isRequired
// 	).isRequired,
// };

export default Dates;
