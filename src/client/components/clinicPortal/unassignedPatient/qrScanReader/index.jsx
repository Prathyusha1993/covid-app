import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class QrScanReader extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div >
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          className="qrscan-reader"
        />
        <p className="qrscn-reader-p">Decoded QR Code: {this.state.result}</p>
      </div>
    )
  }
}

export default QrScanReader;