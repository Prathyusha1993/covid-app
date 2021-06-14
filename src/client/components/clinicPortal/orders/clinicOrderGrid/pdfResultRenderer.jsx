import React, { Component } from "react";
import { serviceConstants } from "../../../../services/common/constants";

export default class PdfResultRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfPath:
        props.data && props.data.results &&
        props.data.results.pdf_path &&
        props.data &&
        props.data.results.pdf_path.length > 0
          ? `${serviceConstants.HOST_NAME}${props.data && props.data.results.pdf_path}`
          : "",
      result: props.data && props.data.test_info && props.data.test_info.covid_detected ? props.data.test_info.covid_detected : "",
    };
  }

  render() {
    return (
      <div>
        {this.state.pdfPath.length > 0 ? (
          <a href={this.state.pdfPath} target="_blank">
            <i class="fa fa-file-pdf-o"></i> {this.state.result}
          </a>
        ) : (
          //alert("results are not found")
          <div></div>
        )}
      </div>
    );
  }
}
