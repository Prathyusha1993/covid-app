import React, { Component } from "react";

class PdfViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				{this.props.result.map((pdf, index) => {
					return (
						<iframe
							src="https://oneportal.dsimed.com/DSIPortal/HelpGuides/One%20Portal%20Best%20Practices%20eScreen%20OR%20Alere%20clients.pdf"
							// src={pdf.results.pdf_path}
							height="500"
							width="900"
							title="Iframe Example"
						></iframe>
					);
				})}
			</div>
		);
	}
}

export default PdfViewer;
