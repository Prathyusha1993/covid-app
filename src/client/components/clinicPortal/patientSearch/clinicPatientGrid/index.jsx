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
import moment from "moment";
import BtnCellRenderer from "./BtnCellRenderer";

class ClinicPatientGrid extends Component {
	constructor(props) {
		super(props);
		this.handleGridEdit = this.handleGridEdit.bind(this);
		
		this.state = {
			modules: [
				ClientSideRowModelModule,
				MasterDetailModule,
				MenuModule,
				ColumnsToolPanelModule,
			],
			columnDefs: [
				{
					headerName: "Edit",
					minWidth: 100,
					cellStyle: { textAlign: 'center' },
					// cellRenderer: function (params) {
					// 	let value = params.value ? params.value : ''
					// 	return(
					// 		//'<span> <i class="fas fa-pen"></i>' + value + '</span>'
					// 		<button onClick={this.handleGridEdit}><span> <i class="fas fa-pen"></i>{value}</span></button>
					// 	)
					// },
					// cellRendererFramework: function(params) {
					// 	return <button onClick={this.handleGridEdit}>Tesst</button>
					// }
					 cellRenderer: 'btnCellRenderer',
					// cellRendererParams: {
					// 	clicked: function() {
					// 	  alert("hello");
					// 	},
					//   },
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
						return moment(params.data.date_of_birth).format("MM-DD-YYYY");
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
						let email =  params.data.email ? params.data.email : '';
						return (
							'<span><i class="fas fa-envelope"></i> ' +
							email +
							"</span>"
						);
					},
				},
				{
					headerName: "Phone",
					field: "mobile",
					minWidth: 200,
					cellRenderer: function (params) {
						let phone =  params.data.mobile ? params.data.mobile : '';
						return (
							'<span><i class="fas fa-phone-alt"></i> ' +
							phone +
							"</span>"
						);
					},
				},
				{
					headerName: "Address",
					minWidth: 200,
					resizable: true,
					valueGetter: function addColumns(params) {
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
					},
					cellRenderer: function (params) {
						return (
							'<span><i class="fas fa-map-marker-alt"></i> ' +
							params.value +
							'</span>'
						);
					},
				},
			],
			frameworkComponents: {
				btnCellRenderer: BtnCellRenderer,
			},
			defaultColDef: { flex: 1 },
			detailCellRendererParams: {
				detailGridOptions: {
					columnDefs: [
						{ headerName: "Test", field: "test_info.description" },
						{ headerName: "Test Type", field: "test_info.test_type" },
						{ headerName: "Sample", field: "test_info.sample" },
						{
							headerName: "Result",
							field: "test_info.covid_detected",
						},
						{
							headerName: "Specimen Collected Date",
							field: "test_info.collected",
							minWidth: 200,
							resizable: true,
							cellRenderer: function (params) {
								return moment(params.data.test_info.collected).format(
									"MM-DD-YYYY, h:mm:ss a"
								);
							},
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
						{
							headerName: "Received Date",
							field: "test_info.received",
							minWidth: 200,
							resizable: true,
							cellRenderer: function (params) {
								return moment(params.data.test_info.received).format(
									"MM-DD-YYYY, h:mm:ss a"
								);
							},
						},
						{
							headerName: "Requisition",
							field: "test_info.requisition",
						},
					],
					defaultColDef: { flex: 1 },
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

	handleGridEdit = (params) => {
		console.log(params);
		alert("hello");
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

	// onFilterTextChange = (e) => {
	// 	this.gridApi.setQuickFilter(e.target.value);
	// }

	render() {
		return (
			<div>
				{/* <div style={{padding:' 10px'}}>
				<input type="search" onChange={this.onFilterTextChange} placeholder="Quick Search"/>
				</div> */}
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
