import moment from "moment";
import React, { Component } from "react";
import Dropzone from "react-dropzone";

class FileBrowse extends Component {
  constructor(props) {
    super(props);
    // this.onDrop = (files) => {
    //   this.setState({
    //     files,
    //     showFile: true,
       
    //   });
    // };
    this.state = {
      files: [],
      showFile: false,
    };
  }

  fileDeleteBtn = () => {
    this.setState({ files: [], showFile: false });
  };

  onDrop = (files) => {
    this.setState({
      files,
      showFile: true,
    });
    console.log('fileName', files[0].name);
    // moment(this.state.collectedDate, "MM/DD/YYYY hh:mm A").format(
    //   "YYYYMMDDHHmmss"
    // )
    this.props.handleFileChange(files[0] );
  };

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}
      accept="image/png, image/jpeg, image/jpg, image/tiff, image/bmp, application/pdf " multiple={false}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              
              <div className="dropzone-icon">
                <i class="fas fa-cloud-upload-alt"></i>
              </div>
              <h4 className="dropzone-browse-files">Browse Files</h4>
              <p className="dropzone-browse-files">
              {!isDragActive && 'Drag n drop files here, or click to select files!'}
              {isDragReject && "File type not accepted, sorry!"}
              </p>
            </div>
            <aside>
              {this.state.showFile === true ? (
                <ul className="dropzone-files row">
                  {files}{" "}
                  <button onClick={this.fileDeleteBtn} className="dropzone-btn">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </ul>
              ) : null}
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default FileBrowse;
