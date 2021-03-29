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
import PdfResultRenderer from "./pdfResultRenderer"

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
					cellStyle: { textAlign: "center" },
					cellRenderer: "editBtnCellRenderer",
				},
				{
					headerName: "Patient Name",
					minWidth: 200,
					valueGetter: function addColumns(params) {
						if (params.data.patient_id) {
							return (
								params.data.patient_id.first_name +
								" " +
								params.data.patient_id.last_name
							);
						} else {
							return "";
						}
					},
				},
				{ headerName: "Test", minWidth: 150, field: "description" },
				{
					headerName: "Test Type",
					minWidth: 150,
					field: "test_info.test_type",
				},
				{ headerName: "Sample", minWidth: 150, field: "test_info.sample" },
				{
					headerName: "Result",
					minWidth: 150,
					resizable: true,
					field: "test_info.covid_detected",
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
					cellRenderer: "pdfResultRenderer"
				},
				{
					headerName: "Specimen Collected Date",
					field: "test_info.collected",
					minWidth: 200,
					resizable: true,
					cellRenderer: function (params) {
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
					headerName: "Physician",
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
					minWidth: 150,
					field: "test_info.requisition",
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

		// fetchOrderMasterData().then((data) => {
		// 	this.setState({ rowData: data.data });
		// });

		

		// fetchOrderMasterData().then((response) => {
		// 	const formattedData = response.data.map((item) => {
		// 		return {
		// 			description: item.test_info.description,
		// 			testType: test_info.test_type
		// 		};
		// 	});

		// 	this.setState({ rowData: formattedData });
		// });



		// Promise.all([
		// 	fetchOrderMasterData(),
		// 	fetchPatientMasterData()
		// ]).then(([orderData, patientData]) => {

		// 	const populatedRowData = [];

		// 	this.setState({
		// 		rowData: orderData.data.concat(patientData.data)
		// 	});
		// });

		Promise.all([
			fetchOrderMasterData(),
			fetchPatientMasterData()
		]).then(([orderData, patientData]) => {

			const formattedData = orderData.data.map((item) => {
				
				const returnData = {
					description: item.test_info && item.test_info.description ? item.test_info.description : '',
					// testType: item.test_info.test_type
				}

				if(item.patient_id && item.patient_id._id) {
					const patientInfo = getPatientInfo(patientData.data, item.patient_id._id);
					returnData.gender = patientInfo.gender; 
					returnData.mrn = patientInfo.mrn;
				}

				return returnData;
			});

			this.setState({ rowData: formattedData });
		});

		/**
		 * 
		 * {
      "address": {
        "address1": "11107 woodson ave",
        "address2": "",
        "city": "Kensington",
        "state": "MD",
        "zip": "20895",
        "country": "USA"
      },
      "_id": "604b9839177b981d99605c1f",
      "date_of_birth": "1988-10-21",
      "first_name": "Samantha",
      "last_name": "Hadaway",
      "__v": 0,
      "createdAt": "2021-03-12T16:35:05.035Z",
      "email": "",
      "ids": [
        {
          "_id": "605d6bdf90d1702a0ccb11f8",
          "external_id": "1596839047",
          "client": "LimitLIS.cloud"
        },
        {
          "_id": "605d6bdf90d1702a0ccb11f9",
          "external_id": "1553880982",
          "client": "Brooks"
        }
      ],
      "mobile": "4436192202",
      "updatedAt": "2021-03-26T05:06:39.067Z",
      "facility_id": "605cc709177b981d9967357d",
      "gender": "F",
      "mrn": "1553880982"
    }
		 */

		const getPatientInfo = (patientData, patientId) => {
			const foundPatientInfo = patientData.find((item) => {
				return item._id === patientId;
			});
			return {
				gender: foundPatientInfo.gender,
				mrn: foundPatientInfo.mrn,
				dob: foundPatientInfo.date_of_birth
			};
		}
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
