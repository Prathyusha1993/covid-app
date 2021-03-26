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
				{this.props.pdfPath!='' ?
				(
					<div>
						<div className="pdfMobileView">
							<a style={{textDecoration:'underline'}} href={this.props.pdfPath} target="_blank">Download COVID report</a><i class="fa fa-download" aria-hidden="true"></i>
						</div>
						<div style={{overflowX:"scroll"}} className="pdfWebView">
						<label>If you are unable to see your results on the page,</label><br/>
						<label>Please download your result below instead</label><br/>
						<a style={{textDecoration:'underline'}} href={this.props.pdfPath} target="_blank">Download COVID report</a><i class="fa fa-download" aria-hidden="true"></i><br/><br/>
							{/* label with value, props from date file*/}
							{/* <div>
							<label>Result: {this.props.value}</label>	
							</div> */}
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
					) :
					(
					<div>
						<label>No results available</label>	
					</div>
				)
				}
				
			</div>
		);
	}
}

PdfViewer.propTypes = {
	pdfPath: PropTypes.string,
};

export default PdfViewer;
