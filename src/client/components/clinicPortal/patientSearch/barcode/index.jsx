import React, { Component } from 'react';
import ScanBarResult from './scanBarResult';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScanBarComponent from './scanBarComponent';

class Barcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      scanCode: '',
      modal: false,
      scanSuccess: false
    };
    this._onDetected = this._onDetected.bind(this);
    this._toggle = this._toggle.bind(this);
  }

  render() {
    return (
      <div>
        <Button variant="info" block onClick={this._toggle} className="btn btn-primary submit-btn button-info-grid">
		<i class="fa fa-qrcode" aria-hidden="true"></i> Scan Barcode
        </Button>

        {this.state.scanSuccess ? (
          <ScanBarResult key="scanResult" text={this.state.scanCode} />
        ) : null}
        {/* <input id="scanner_result" type="text" value={this.state.scanCode} />
        <input id="scanner_result" type="text" value={this.state.result} />
        <input id="scanner_result" type="text" value={this.state.scanSuccess} /> */}

        <Modal show={this.state.modal} onHide={this._toggle}>
          <Modal.Header closeButton="true" />
          <Modal.Body>
            <ScanBarComponent handleScan={this._onDetected} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  _toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      scanSuccess: false
    }));
  }

  _onDetected = (result) => {
    this.setState({
      modal: false,
      scanCode: result ? result.codeResult.code : '',
      scanSuccess: result ? true : false,
      results: result
    });
  }
}

export default Barcode;
