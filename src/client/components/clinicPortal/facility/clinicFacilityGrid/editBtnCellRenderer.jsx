import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import FacilityDetails from "./facilityDetails";
import { Modal, Button } from "react-bootstrap";
import {
	getFacilityData,
	getFacilityDataById,
} from "../../../../services/clinicPortalServices/facilityServices";

export default class EditBtnCellRenderer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			facilityId: props.data._id,
			errors: [],
			facilityDetails: {},
			name: "",
			code: "",
			contactName: "",
			phoneNum: "",
			contactEmail: "",
			faxNum: "",
			address1: "",
			address2: "",
			city: "",
			state: "",
			zip: "",
			country: "",
			emailNotification: "",
			environmentalMonitoring: "",
			faxType: "",
			isActive: true,
		};
	}

	renderTooltipEdit = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Edit Facility
		</Tooltip>
	);

	componentDidMount() {
		this.loadFacilityDetails();
	};

	loadFacilityDetails = () => {
		getFacilityDataById(this.state.facilityId)
			.then((response) => {
				this.setState({ facilityDetails: response.data[0] });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

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
						<FacilityDetails
							facilityDetails={this.state.facilityDetails}
							facilityId={this.state.facilityId}
							handleClose={this.handleClose}
						/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}
