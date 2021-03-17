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
				<div className="pdfMobileView">
					<a style={{textDecoration:'underline'}} href={this.props.pdfPath}>Download COVID report</a><i className="fa fa-download" aria-hidden="true"></i>
				</div>
				<div className="pdfWebView">
					<div>
					<label>Result: {this.props.value}</label>	
					</div>
					<div style={{ overflow: 'auto'}}>
					<iframe
						// src="https://oneportal.dsimed.com/DSIPortal/HelpGuides/One%20Portal%20Best%20Practices%20eScreen%20OR%20Alere%20clients.pdf"
						src={this.props.pdfPath}
						height="500"
						width="900"
						title="Iframe Example"
					></iframe>
					</div>
				</div>
				
			</div>
		);
	}
}

PdfViewer.propTypes = {
	pdfPath: PropTypes.string,
};

export default PdfViewer;
