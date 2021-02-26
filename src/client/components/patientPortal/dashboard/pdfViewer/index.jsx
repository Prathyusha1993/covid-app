import React, { Component } from "react";
import PropTypes from "prop-types";

class PdfViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				{/* label with value, props from date file*/}
				<label>Result: {this.props.value}</label>
				<iframe
					// src="https://oneportal.dsimed.com/DSIPortal/HelpGuides/One%20Portal%20Best%20Practices%20eScreen%20OR%20Alere%20clients.pdf"
					src={this.props.pdfPath}
					height="500"
					width="900"
					title="Iframe Example"
				></iframe>
			</div>
		);
	}

	// render() {
	// 	return (
	// 		<div>
	// 			<iframe
	// 				src="https://oneportal.dsimed.com/DSIPortal/HelpGuides/One%20Portal%20Best%20Practices%20eScreen%20OR%20Alere%20clients.pdf"
	// 				// src={pdf.results.pdf_path}
	// 				height="500"
	// 				width="900"
	// 				title="Iframe Example"
	// 			></iframe>
	// 		</div>
	// 	);
	// }
}

PdfViewer.propTypes = {
	pdfPath: PropTypes.string,
};

export default PdfViewer;
