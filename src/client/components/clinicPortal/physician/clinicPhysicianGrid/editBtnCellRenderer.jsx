import React, { Component } from "react";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import PhysicianDetails from "./physicianDetails";

export default class EditBtnCellRenderer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			physicianDetails: {},
			physicianId: props.data._id,
			errors: [],
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	renderTooltipEdit = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Edit Physician
		</Tooltip>
	);

	render() {
		return (
			<div>
				<OverlayTrigger
					placement="top"
					delay={{ show: 100, hide: 400 }}
					overlay={this.renderTooltipEdit}
				>
					<button onClick={this.handleShow} className="edit-order-btn">
						<i class="fas fa-pen"></i>
					</button>
				</OverlayTrigger>
				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
					<Modal.Header closeButton>
						<Modal.Title>Update Physician Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<PhysicianDetails
							physicianId={this.state.physicianId}
							handleClose={this.handleClose}
						/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}
