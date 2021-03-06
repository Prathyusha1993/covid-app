import React, { Component } from 'react';
import Quagga from 'quagga';

class ScanBarComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      dataUri: ''
    };
    this._onDetected = this._onDetected.bind(this);
  }

  render() {
    return <div id="interactive" className="viewport" />;
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: { min: 200, max: 500 },
            height: { min: 100, max: 300 },
            aspectRatio: { min: 4 / 3, max: 16 / 9 },
          
            facingMode: 'environment' // or user
          },
          area: {
            // defines rectangle of the detection/localization area
            top: '0%', // top offset
            right: '0%', // right offset
            left: '0%', // left offset
            bottom: '0%' // bottom offset
          }
        },
        frequency: 'full',
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        numOfWorkers: 8,
        decoder: {
          readers: [
            'code_39_reader',
            'ean_reader',
            'ean_8_reader',
            'code_128_reader',
            'upc_reader'
          ]
        },
        locate: true
      },
      function(err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(this._onDetected);
    Quagga.onProcessed(this._onProcessed);
  }

  componentWillUnmount() {
    Quagga.stop();
  }

  _onDetected(result) {
    let code = result;

    Quagga.stop();
    return this.props.handleScan(code);
  }

  _getMedian(arr) {
    arr.sort((a, b) => a - b);
    const half = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1)
      // Odd length
      return arr[half];
    return (arr[half - 1] + arr[half]) / 2.0;
  }

  _onProcessed(result) {
    let drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          parseInt(drawingCanvas.getAttribute('width'), 10),
          parseInt(drawingCanvas.getAttribute('height'), 10)
        );
        result.boxes
          .filter(function(box) {
            return box !== result.box;
          })
          .forEach(function(box) {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: 'green',
              lineWidth: 2
            });
          });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
          color: '#00F',
          lineWidth: 2
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(
          result.line,
          { x: 'x', y: 'y' },
          drawingCtx,
          { color: 'red', lineWidth: 3 }
        );
      }
    }
  }
}

export default ScanBarComponent;
