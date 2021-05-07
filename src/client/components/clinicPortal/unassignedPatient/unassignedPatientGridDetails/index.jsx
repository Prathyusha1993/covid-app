import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import QrScanReader from "../qrScanReader";
import RequisitionBtnCellRenderer from "./requisitionBtnCellRenderer";

import TextField from "@material-ui/core/TextField";
import ViewPatientSignUp from "./viewPatientSignUp";
import ViewRequisitionFormpage from "./viewRequisitionFormPage";

//service calls
import { fetchUnassignedPatientData } from "../../../../clinicPortalServices/unassignedPatientService";
import moment from "moment";

class UnassignedPatientGridDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showQrScanner: false,
			showPatientSignup: false,
			showCreateRequisition: false,
			scannedPatientId: "",
      patientDetails: {},
			modules: [
				ClientSideRowModelModule,
				MasterDetailModule,
				MenuModule,
				ColumnsToolPanelModule,
				SetFilterModule,
				FiltersToolPanelModule,
			],
			columnDefs: [
				{
					headerName: "Requistion",
					minWidth: 120,
					maxWidth: 120,
					cellStyle: { textAlign: "center" },
					cellRenderer: "requisitionBtnCellRenderer",
				},

				{
					headerName: "First Name",
					field: "first_name",
					//cellRenderer: "agGroupCellRenderer",
					minWidth: 200,
					resizable: true,
				},
				{
					headerName: "Last Name",
					field: "last_name",
					minWidth: 150,
					resizable: true,
				},
				{
					headerName: "Date Of Birth",
					field: "date_of_birth",
					minWidth: 150,
					maxWidth: 150,

					cellRenderer: function (params) {
						return params.data.date_of_birth
							? moment(params.data.date_of_birth, "YYYY-MM-DD").format(
									"MM/DD/YYYY"
							  )
							: "";
					},
				},
				{
					headerName: "Gender",
					field: "gender",
					minWidth: 100,
					maxWidth: 100,
				},
				{
					headerName: "MRN",
					field: "mrn",
					minWidth: 150,
				},
				{
					headerName: "Email",
					field: "email",
					minWidth: 150,
					resizable: true,
					cellRenderer: function (params) {
						return params.data.email
							? '<span><i class="fas fa-envelope"></i> ' +
									params.data.email +
									"</span>"
							: "";
					},
				},
				{
					headerName: "Phone",
					field: "mobile",
					minWidth: 170,
					maxWidth: 170,
					cellRenderer: function (params) {
						return params.data.mobile
							? '<span><i class="fas fa-phone-alt"></i> ' +
									params.data.mobile +
									"</span>"
							: "";
					},
				},
				{
					headerName: "Address",
					minWidth: 200,
					resizable: true,
					valueGetter: function addColumns(params) {
						//console.log(params.data.address);

						if (params.data.address) {
							return (
								params.data.address.address1 +
								" " +
								params.data.address.address2 +
								" " +
								params.data.address.city +
								" " +
								params.data.address.state +
								" " +
								params.data.address.zip
							);
						} else {
							return "";
						}
					},
					cellRenderer: function (params) {
						return params.value
							? '<span><i class="fas fa-map-marker-alt"></i> ' +
									params.value +
									"</span>"
							: "";
					},
				},
			],
			frameworkComponents: {
				requisitionBtnCellRenderer: RequisitionBtnCellRenderer,
			},
			//     paginationNumberFormatter: function (params) {
			// 	return "[" + params.value.toLocaleString() + "]";
			// },
			defaultColDef: {
				flex: 1,
				filter: true,
				enableRowGroup: true,
				enablePivot: true,
				enableValue: true,
				sortable: true,
			},
			rowData: null,
		};
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.loadGridData();
	};

	loadGridData = () => {
		//need to pass facility_id as input
		fetchUnassignedPatientData(window.localStorage.getItem("FACILITY_ID")).then(
			(data) => {
				this.setState({ rowData: data.data });
			}
		);
	};

	onFilterTextChange = (e) => {
		this.gridApi.setQuickFilter(e.target.value);
	};

	clearFilter = () => {
		this.gridApi.setFilterModel(null);
		this.gridApi.setQuickFilter(null);
		document.getElementById("reset-form").value = "";
	};

	showQrScannerHandler = () => {
		this.setState({
			showQrScanner: true,
		});
	};

	hideQrScannerHandler = () => {
		this.setState({
			showQrScanner: false,
		});
	};

	onQrCodeScanHandler = (data) => {
		if (data) {
			this.setState({
				scannedPatientId: "60903a9f513609de503835c6", // data,
			});
      //need to pass viewpatientsignup show property
      //this.showPatientSignupHandler();
		}
	};

	showPatientSignupHandler = () => {
		this.setState({
			showPatientSignup: true,
			scannedPatientId: "60903a9f513609de503835c6", // TODO: remove later
		});
		this.hideQrScannerHandler();
	};

	hidePatientSignupHandler = () => {
		this.setState({
			showPatientSignup: false,
		});
	};

  showCreateRequisitionHandler = () => {
		this.setState({
			showCreateRequisition: true
		});
		this.hidePatientSignupHandler();
	};

	hideCreateRequisitionHandler = () => {
		this.setState({
			showCreateRequisition: false,
		});
	};

  setPatientDetails = (patientDetails) => {
    this.setState({
      patientDetails: patientDetails
    });
  }

	render() {
		return (
			<div>
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="/">Home</a>
										</li>
										<li className="breadcrumb-item active" aria-current="page">
											Unassigned Patients
										</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Unassigned Patients</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row" style={{ padding: " 12px" }}>
					<div className="col-md-3">
						<TextField
							label="Quick Search"
							variant="outlined"
							className="form-control"
							id="reset-form"
							InputLabelProps={{
								shrink: true,
							}}
							type="string"
							margin="dense"
							onChange={this.onFilterTextChange}
						/>
					</div>
					<div>
						<button
							className="btn btn-primary submit-btn button-info-grid"
							onClick={() => this.clearFilter()}
						>
							<i className="fa fa-times" aria-hidden="true"></i> Clear Filter
						</button>
					</div>
					<div className="col grid-buttons">
						<button
							onClick={this.showQrScannerHandler}
							className="btn btn-primary submit-btn button-info-grid"
						>
							<i className="fa fa-qrcode" aria-hidden="true"></i> Scan QR Code
						</button>
						<QrScanReader
							show={this.state.showQrScanner}
							onQrCodeScanHandler={this.onQrCodeScanHandler}
							hideQrScannerHandler={this.hideQrScannerHandler}
							scannedPatientId={this.state.scannedPatientId}
							showPatientSignupHandler={this.showPatientSignupHandler}
						/>
						<ViewPatientSignUp
							patientId={this.state.scannedPatientId}
							closeQrScanner={this.handleClose}
							show={this.state.showPatientSignup}
							hidePatientSignupHandler={this.hidePatientSignupHandler}
              showCreateRequisitionHandler={this.showCreateRequisitionHandler}  
              setPatientDetails={this.setPatientDetails}            
						/>
            <ViewRequisitionFormpage
							show={this.state.showCreateRequisition}
							hideCreateRequisitionHandler={this.hideCreateRequisitionHandler}
              patientDetails={this.state.patientDetails}
						/>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "100vh",
						padding: "15px 15px 15px 15px",
					}}
				>
					<div
						id="myGrid"
						style={{
							height: "100%",
							width: "100%",
						}}
						className="ag-theme-alpine"
					>
						<AgGridReact
							modules={this.state.modules}
							columnDefs={this.state.columnDefs}
							defaultColDef={this.state.defaultColDef}
							masterDetail={true}
							onGridReady={this.onGridReady}
							rowData={this.state.rowData}
							pagination={true}
							paginationAutoPageSize={true}
							frameworkComponents={this.state.frameworkComponents}
							//paginationPageSize={20}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default UnassignedPatientGridDetails;
