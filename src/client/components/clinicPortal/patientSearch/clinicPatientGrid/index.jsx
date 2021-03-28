import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import {
	fetchPatientMasterData,
	fetchPatientExpandableData,
} from "../../../../clinicPortalServices/patientSearchService";
import moment from "moment";
import BtnCellRenderer from "./BtnCellRenderer";
import EditBtnCellRenderer from "../../orderSearch/orderGridDetails/EditBtnCellRenderer";

class ClinicPatientGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modules: [
				ClientSideRowModelModule,
				MasterDetailModule,
				MenuModule,
				ColumnsToolPanelModule,
				AllCommunityModules,
			],
			columnDefs: [
				{
					headerName: "Edit",
					minWidth: 80,
					cellStyle: { textAlign: "center" },
					cellRenderer: "btnCellRenderer",
				},

				{
					headerName: "First Name",
					field: "first_name",
					cellRenderer: "agGroupCellRenderer",
					minWidth: 200,
				},
				{ headerName: "Last Name", field: "last_name", minWidth: 150 },
				{
					headerName: "Date Of Birth",
					field: "date_of_birth",
					minWidth: 150,
					cellRenderer: function (params) {
						//return moment(params.data.date_of_birth).format("MM/DD/YYYY");
						return params.data.date_of_birth
							? moment(params.data.date_of_birth).format("MM/DD/YYYY")
							: "";
					},
				},
				{
					headerName: "Gender",
					field: "gender",
					minWidth: 150,
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
					minWidth: 200,
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
						console.log(params.data.address);

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
				btnCellRenderer: BtnCellRenderer,
			},
			defaultColDef: { flex: 1, filter: true },
			detailCellRendererParams: {
				detailGridOptions: {
					columnDefs: [
						{
							headerName: "Edit",
							minWidth: 80,
							cellStyle: { textAlign: "center" },
							cellRenderer: "editBtnCellRenderer",
						},
						{
							headerName: "Test",
							field: "test_info.description",
							cellRenderer: function (params) {
								if (
									params.data.test_info &&
									params.data.test_info.description
								) {
									return params.data.test_info.description;
								} else {
									return "";
								}
							},
						},
						{
							headerName: "Test Type",
							field: "test_info.test_type",
							cellRenderer: function (params) {
								if (params.data.test_info && params.data.test_info.test_type) {
									return params.data.test_info.test_type;
								} else {
									return "";
								}
							},
						},
						{
							headerName: "Sample",
							resizable: true,
							field: "test_info.sample",
							cellRenderer: function (params) {
								if (params.data.test_info && params.data.test_info.sample) {
									return params.data.test_info.sample;
								} else {
									return "";
								}
							},
						},
						{
							headerName: "Result",
							field: "test_info.covid_detected",
							resizable: true,
							cellRenderer: function (params) {
								if (
									params.data.test_info &&
									params.data.test_info.covid_detected
								) {
									return params.data.test_info.covid_detected;
								} else {
									return "";
								}
							},
						},
						{
							headerName: "Specimen Collected Date",
							field: "test_info.collected",
							minWidth: 200,
							resizable: true,
							cellRenderer: function (params) {
								console.log("collectedDate", params.data.test_info.collected);
								if (params.data.test_info && params.data.test_info.collected) {
									return moment(
										params.data.test_info.collected,
										"YYYYMMDDhhmmss"
									).format("MM/DD/YYYY h:mm a");
								} else {
									return "";
								}
							},
						},
						{
							headerName: "Provider",
							minWidth: 150,
							resizable: true,
							valueGetter: function addColumns(params) {
								if (params.data.provider) {
									return (
										params.data.provider.first_name +
										" " +
										params.data.provider.last_name
									);
								} else {
									return "";
								}
							},
						},
						{
							headerName: "Received Date",
							field: "test_info.received",
							minWidth: 200,
							resizable: true,
							cellRenderer: function (params) {
								if (params.data.test_info && params.data.test_info.received) {
									return moment(
										params.data.test_info.received,
										"YYYYMMDDhhmmss"
									).format("MM/DD/YYYY h:mm a");
								} else {
									return "";
								}
							},
						},
						{
							headerName: "Requisition",
							field: "test_info.requisition",
							cellRenderer: function (params) {
								if (
									params.data.test_info &&
									params.data.test_info.requisition
								) {
									return params.data.test_info.requisition;
								} else {
									return "";
								}
							},
						},
					],
					frameworkComponents: {
						editBtnCellRenderer: EditBtnCellRenderer,
					},
					defaultColDef: { flex: 1, filter: true },
				},
				getDetailRowData: function (params) {
					fetchPatientExpandableData(params.data._id).then(
						(expandableRowData) => {
							params.successCallback(expandableRowData.data);
						}
					);
				},
			},
			rowData: null,
			expandableRowData: null,
		};
	}

	onGridReady = (params) => {
		console.log(params);
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;

		//need to pass facility_id as input
		fetchPatientMasterData().then((data) => {
			this.setState({ rowData: data.data });
		});
	};

	onFilterTextChange = (e) => {
		this.gridApi.setQuickFilter(e.target.value);
	};

	render() {
		return (
			<div>
				<div className="col-md-3" style={{ padding: " 12px" }}>
					<input
						type="search"
						className="form-control"
						onChange={this.onFilterTextChange}
						placeholder="Quick Search"
					/>
				</div>
				<div
					style={{
						width: "100%",
						height: "550px",
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
							detailCellRendererParams={this.state.detailCellRendererParams}
							onGridReady={this.onGridReady}
							rowData={this.state.rowData}
							frameworkComponents={this.state.frameworkComponents}
							pagination={true}
							paginationAutoPageSize={true}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ClinicPatientGrid;
