import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import { fetchOrderMasterData } from "../../../../clinicPortalServices/orderSearchService";
import {fetchPatientMasterData} from "../../../../clinicPortalServices/patientSearchService";
import moment from "moment";
import EditBtnCellRenderer from "./EditBtnCellRenderer";
import PdfResultRenderer from "./pdfResultRenderer";
import {serviceConstants} from "../../../../patientPortalServices/constants";

import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey(`${serviceConstants.AG_GRID_LICENSE_KEY}`);

const getPatientInfo = (patientData, patientId) => {
	if(patientData && patientData.length>0){
		const foundPatientInfo = patientData.find((item) => {
			return item._id === patientId;
		});
		return {
			gender: foundPatientInfo.gender,
			mrn: foundPatientInfo.mrn,
			dob: foundPatientInfo.date_of_birth,
			email: foundPatientInfo.email,
			mobile: foundPatientInfo.mobile
		};
	}
};

class OrderGridDetails extends Component {
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
					maxWidth: 80,
					cellStyle: { textAlign: "center" },
					cellRenderer: "editBtnCellRenderer",
				},
				{
					headerName: "Patient Name",
					minWidth: 200,
					field: "patientName",
					resizable: true,
				},
				{ 
					headerName: "Test", 
					minWidth: 150, 
					field: "description" 
				},
				{
					headerName: "Test Type",
					minWidth: 150,
					field: "testType",
				},
				{ 
					headerName: "Sample", 
					minWidth: 150, 
					field: "sample" 
				},
				{
					headerName: "Result",
					minWidth: 150,
					resizable: true,
					//field: "result",
					cellRenderer: "pdfResultRenderer",
					// cellRenderer: function (params) {
					// 	if (
					// 		params.data.test_info &&
					// 		params.data.test_info.covid_detected
					// 	) {
					// 		//return params.data.test_info.covid_detected;
					// 		return '<span><i  class="fas fa-file-pdf"></i> ' +
					// 		params.data.test_info.covid_detected +
					// 		'</span>'
					// 	} else {
					// 		return "";
					// 	}
					// },
					//cellRenderer: "pdfResultRenderer"
				},
				{
					headerName: "Specimen Collected Date",
					field: "collectedDate",
					minWidth: 200,
					resizable: true,
				},
				{
					headerName: "Physician",
					minWidth: 150,
					resizable: true,
					field: 'provider'
				},
				{
					headerName: "Received Date",
					field: "receivedDate",
					minWidth: 200,
					resizable: true,
				},
				{
					headerName: "Requisition",
					minWidth: 150,
					field: "requisition",
				},
			],
			frameworkComponents: {
				editBtnCellRenderer: EditBtnCellRenderer,
				pdfResultRenderer: PdfResultRenderer,
			},
			defaultColDef: { flex: 1, filter: true },
			rowData: null,
			rowData1: null,
		};
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.loadGridData();
		
	};

	loadGridData = () => {
		var facilityID = window.localStorage.getItem("FACILITY_ID");
		//var facilityID = "";
		Promise.all([			
			fetchOrderMasterData(facilityID),
			fetchPatientMasterData(facilityID)
		]).then(([orderData, patientData]) => {
			//console.log(orderData);
			if(orderData && orderData.data && orderData.data.length>0) {
				const formattedData = orderData.data.map((item) => {

					
					const returnData = {
						orderId : item._id,
						patientName: item.patient_id ? item.patient_id.first_name + ' ' + item.patient_id.last_name : ''  ,
						description: item.test_info && item.test_info.description ? item.test_info.description : '',
						testType: item.test_info && item.test_info.test_type ? item.test_info.test_type : '',
						sample: item.test_info && item.test_info.sample ? item.test_info.sample : '',
						result: item.test_info && item.test_info.covid_detected ? item.test_info.covid_detected : '',
						collectedDate: item.test_info && item.test_info.collected ? moment(item.test_info.collected, "YYYYMMDDHHmmss").format(
											"MM/DD/YYYY hh:mm A") : '',
						provider: (item.provider && item.provider.first_name? item.provider.first_name : '') + " " + (item.provider && item.provider.last_name? item.provider.last_name : ''),
						receivedDate: item.test_info && item.test_info.received ? moment(item.test_info.received, "YYYYMMDDHHmmss").format(
							"MM/DD/YYYY hh:mm A") : '',
						requisition: item.lab_order_id && item.lab_order_id ? item.lab_order_id : '',
						facilitySource: item.facility_source ? item.facility_source : '',
						code : item.code ? item.code:'',
						codeType : item.code_type ? item.code_type: '',
						pdfPath: item.results && item.results.pdf_path ? item.results.pdf_path: '',	
						
						refreshGrid: this.loadGridData
					}

					if(item.patient_id && item.patient_id._id) {
						const patientInfo = getPatientInfo(patientData.data, item.patient_id._id);
						returnData.gender = patientInfo ? patientInfo.gender : ''; 
						returnData.mrn = patientInfo ? patientInfo.mrn : '';
						returnData.dob = patientInfo && patientInfo.dob ? moment(patientInfo.dob, "YYYY-MM-DD").format(
							"MM/DD/YYYY") : '';
						returnData.email = patientInfo ? patientInfo.email : '';
						returnData.mobile = patientInfo ? patientInfo.mobile : '';
					}

					return returnData;
				
				});
				//console.log(formattedData);
				this.setState({ rowData: formattedData });
			}
			else
			this.setState({ rowData: [] });
		});
	}

	onFilterTextChange = (e) => {
		this.gridApi.setQuickFilter(e.target.value);
	};

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
											Orders
										</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Orders</h2>
							</div>
						</div>
					</div>
				</div>
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
							// detailCellRendererParams={this.state.detailCellRendererParams}
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

export default OrderGridDetails;
