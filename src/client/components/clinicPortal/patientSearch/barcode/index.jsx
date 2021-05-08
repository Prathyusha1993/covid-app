import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function Barcode ()  {
	const [data, setData] = React.useState("Not Found");
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      
      <Button onClick={() => setLgShow(true)}
      className="btn btn-primary submit-btn button-info-grid">
        <i class="fa fa-qrcode" aria-hidden="true"></i> Bar Code Scanner</Button>
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Bar Code Scanner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
        style={{marginLeft: '30px'}}
      />
      <p className="qrscn-reader-btn">Decoded Barcode: {data}</p>
    </>

        </Modal.Body>
      </Modal>
    </>
  );
		// <div>
		// 	<button
		// 		onClick={this.handleShow}
		// 		// style={{ border: "none", backgroundColor: "transparent" }}
		// 		className="btn btn-primary submit-btn button-info-grid"
		// 	>
		// 		<i class="fa fa-qrcode" aria-hidden="true"></i> Bar Code Scanner
		// 	</button>

		// 	<Modal
		// 		size="lg"
		// 		aria-labelledby="contained-modal-title-vcenter"
		// 		centered
		// 		show={this.state.show}
		// 		onHide={this.handleClose}
		// 	>
		// 		<Modal.Header closeButton>
		// 			<Modal.Title>Bar Code Scanner</Modal.Title>
		// 		</Modal.Header>
		// 		<Modal.Body>
		// 			<div>
		// 				<>
		// 					<BarcodeScannerComponent
		// 						width={500}
		// 						height={500}
		// 						onUpdate={this.handleScan}
    //             // {(err, result) => {
		// 						// 	if (result) setData(result.text);
		// 						// 	else setData("Not Found");
		// 						// }}
		// 					/>

		// 					<p>Decoded barcode: {this.state.data}</p>
		// 				</>
		// 			</div>
		// 		</Modal.Body>
		// 		<Modal.Footer>
		// 			<Button variant="secondary" onClick={this.handleClose}>
		// 				Close
		// 			</Button>
		// 			{/* <Button variant="primary" onClick={this.handleOrderEditChanges}>
		// 					Save Changes
		// 				</Button> */}
		// 		</Modal.Footer>
		// 	</Modal>
		// </div>
	
}


export default Barcode;
