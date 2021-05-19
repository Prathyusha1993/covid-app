import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {getPhysicianDataById} from "../../../../clinicPortalServices/physicianServices";
import PhysicianDetails from './physicianDetails';

export default class EditBtnCellRenderer extends Component {
	constructor(props) {
		super(props);
		//console.log(props);
		this.state = {
			show: false,
			//refreshGrid: props.data.refreshGrid,
			firstName: "",
			lastName: "",
			code: "",
			npi: "",
			mobile: "",
			address: "",
			facilityId: "",
			physicianDetails:[],
			physicianId: props.data._id,
			errors: [],
		};
	};

	componentDidMount() {
		this.loadPhysicianDetails();
	};

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

	loadPhysicianDetails = () => {
		getPhysicianDataById(this.state.physicianId).then((response) => {
			this.setState({physicianDetails: response.data[0]})
		})
	}

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
						<Modal.Title>Update Facility Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<PhysicianDetails
							physicianDetails={this.state.physicianDetails}
							physicianId={this.state.physicianId}
							handleClose={this.handleClose}
						/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}
