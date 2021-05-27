import React, { Component } from "react";
import { serviceConstants } from "../../../../services/common/constants";

export default class PdfResultRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfPath:
        props.data &&
        props.data.pdfPath &&
        props.data &&
        props.data.pdfPath.length > 0
          ? `${serviceConstants.HOST_NAME}${props.data && props.data.pdfPath}`
          : "",
      result: props.data && props.data.result ? props.data.result : "",
    };
  };

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
