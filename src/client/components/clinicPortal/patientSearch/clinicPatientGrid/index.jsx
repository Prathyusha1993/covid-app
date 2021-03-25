import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import {
	fetchPatientMasterData,
	fetchPatientExpandableData,
} from "../../../../clinicPortalServices/patientSearchService";

class ClinicPatientGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modules: [
				ClientSideRowModelModule,
				MasterDetailModule,
				MenuModule,
				ColumnsToolPanelModule,
			],
			columnDefs: [
				{
					headerName: "First Name",
					field: "first_name",
					cellRenderer: "agGroupCellRenderer",
				},
				{ headerName: "Last Name", field: "last_name" },
				{ headerName: "Date Of Birth", field: "date_of_birth" },
				{
					headerName: "Gender",
					field: "gender",
				},
				{
					headerName: "Email",
					field: "email",
					minWidth: 150,
					cellRenderer: function (params) {
						return (
							'<span><i class="fas fa-envelope-square"></i> ' +
							params.data.email +
							"</span>"
						);
					},
				},
				{
					headerName: "Phone",
					field: "mobile",
					minWidth: 150,
					cellRenderer: function (params) {
						return (
							'<span><i class="fas fa-phone-square-alt"></i> ' +
							params.data.mobile +
							"</span>"
						);
					},
				},
				{
					headerName: "Address",
					minWidth: 200,
					resizable: true,
					field: "address1",
					valueGetter: function addColumns(params) {
						return (
							params.data.address.address1 +
							" " +
							params.data.address.address2 +
							" " +
							params.data.address.city +
							" " +
							params.data.address.state
						);
					},
					cellRenderer: function (params) {
						return (
							'<span><i class="fas fa-map-marker-alt"></i> ' +
							params.value +
							"</span>"
						);
					},
				},
				{
					headerName: "Source",
					field: "facility_source",
				},
			],
			defaultColDef: { flex: 1 },
			detailCellRendererParams: {
				detailGridOptions: {
					columnDefs: [
						{ headerName: "Test", field: "test_info.description" },
						{ headerName: "Test Type", field: "test_info.test_type" },
						{
							headerName: "Result",
							field: "results.value",
						},
						{
							headerName: "Result Date",
							field: "results.result_date",
						},
						{
							headerName: "Specimen Collected Date",
							field: "order_date",
						},
						{
							headerName: "Provider",
							minWidth: 150,
							resizable: true,
							valueGetter: function addColumns(params) {
								return (
									params.data.provider.first_name +
									" " +
									params.data.provider.last_name
								);
							},
						},
					],
					defaultColDef: { flex: 1 },
				},
				getDetailRowData: function (params) {
					fetchPatientExpandableData(params.data.patiendId).then(
						(expandableRowData) => {
							params.successCallback(expandableRowData.data);
						}
					);
					//params.successCallback(params.data.callRecords);
				},
			},
			rowData: null,
			expandableRowData: null,
		};
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;

		// const updateData = (data) => {
		//   this.setState({ rowData: data });
		// };

		// fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
		//   .then((resp) => resp.json())
		//   .then((data) => updateData(data));

		fetchPatientMasterData().then((data) => {
			this.setState({ rowData: data.data });
		});
	};

	onFirstDataRendered = (params) => {
		setTimeout(function () {
			params.api.getDisplayedRowAtIndex(1).setExpanded(true);
		}, 0);
	};

	render() {
		return (
			<div>
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
							onFirstDataRendered={this.onFirstDataRendered.bind(this)}
							rowData={this.state.rowData}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ClinicPatientGrid;
