import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class DriverLicenseBrowse extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})} >
              <input {...getInputProps()} />
              <div className="dropzone-icon">
              <i class="fas fa-cloud-upload-alt"></i>
              </div>
              <h4 className="dropzone-browse-files">Browse Files</h4>
              <p className="dropzone-browse-files">Drag 'n' drop files here, or click to select files</p>
              
            </div>
            <aside>
              {/* <h4>Files</h4> */}
              <ul className="dropzone-files">{files} 
              {/* <button><i class="fas fa-trash-alt"></i></button> */}
              </ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default DriverLicenseBrowse;