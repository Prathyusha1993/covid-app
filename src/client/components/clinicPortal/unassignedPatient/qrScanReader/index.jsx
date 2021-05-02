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
      <div style={{position: 'relative'}}>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%', marginLeft:'30%' }}
        />
        <p style={{paddingTop: '10px', marginLeft: '40%'}}>Decoded QR Code: {this.state.result}</p>
      </div>
    )
  }
}

export default QrScanReader;