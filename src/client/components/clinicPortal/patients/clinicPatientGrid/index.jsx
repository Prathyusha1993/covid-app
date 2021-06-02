import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import moment from "moment";

import MasterBtnCellRenderer from "./masterBtnCellRenderer";
import EditBtnCellRenderer from "../../orders/clinicOrderGrid/editBtnCellRenderer";
import PdfResultRenderer from "../../orders/clinicOrderGrid/pdfResultRenderer";
import PatientSearchMenu from "./patientSearchMenu";

import {
	fetchPatientMasterData,
	fetchPatientExpandableData,
	exportPatients,
} from "../../../../services/clinicPortalServices/patientSearchService";
import { getPatientUserSettings } from "../../../../services/clinicPortalServices/userGridSettings";
import { savePatientSettings } from "../../../../services/clinicPortalServices/saveStateSettings";
import QrScanReader from "../qrScanReader/index.jsx";
import ViewPatientSignUp from "../unassignedPatients/viewPatientSignUp";
import ViewRequisitionFormPage from "../unassignedPatients/viewRequisitionFormPage";
import { fetchFacilitiesForOrders } from "../../../../services/clinicPortalServices/facilityServices";
import { handleError } from "../../../../services/common/errorHandler";
import { getUserRole } from "../../../../services/common/util";

const getPatientInfo = (patientData, patientId) => {
	if (patientData && patientData.length > 0) {
		const foundPatientInfo = patientData.find((item) => {
			return item._id === patientId;
		});
		return {
			gender: foundPatientInfo.gender || "",
			mrn: foundPatientInfo.mrn,
			dob: foundPatientInfo.date_of_birth,
			email: foundPatientInfo.email,
			mobile: foundPatientInfo.mobile,
		};
	}
};

class ClinicPatientGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user_role: getUserRole(),
			searchFilters: {
				facility_id: "",
			},
			showQrScanner: false,
			showPatientSignup: false,
			showCreateRequisition: false,
			scannedPatientId: "", //ToDo: remove later
			patientDetails: {},
			modules: [
				ClientSideRowModelModule,
				MasterDetailModule,
				MenuModule,
				ColumnsToolPanelModule,
				AllCommunityModules,
				ExcelExportModule,
				SetFilterModule,
				FiltersToolPanelModule,
			],
			gridName: "Patient",
			columnDefs: [
				{
					headerName: "Edit",
					minWidth: 80,
					maxWidth: 80,
					cellStyle: { textAlign: "center" },
					cellRenderer: "masterBtnCellRenderer",
				},

				{
					headerName: "First Name",
					field: "first_name",
					cellRenderer: "agGroupCellRenderer",
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
				masterBtnCellRenderer: MasterBtnCellRenderer,
			},
			paginationNumberFormatter: function (params) {
				return "[" + params.value.toLocaleString() + "]";
			},
			defaultColDef: {
				flex: 1,
				filter: true,
				enableRowGroup: true,
				enablePivot: true,
				enableValue: true,
			},
			sideBar: { toolPanels: ["columns"] },
			rowGroupPanelShow: "always",
			pivotPanelShow: "always",
			detailCellRendererParams: {
				detailGridOptions: {
					columnDefs: [
						{
							headerName: "Edit",
							minWidth: 80,
							maxWidth: 80,
							cellStyle: { textAlign: "center" },
							cellRenderer: "editBtnCellRenderer",
							// hide: true
						},
						{
							headerName: "Test",
							field: "description",
							resizable: true,
						},
						{
							headerName: "Test Type",
							field: "testType",
							resizable: true,
						},
						{
							headerName: "Sample",
							resizable: true,
							field: "sample",
						},
						{
							headerName: "Result",
							resizable: true,
							field: "result",
							cellRenderer: "pdfResultRenderer",
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
							field: "provider",
						},
						{
							headerName: "Received Date",
							field: "receivedDate",
							minWidth: 200,
							resizable: true,
						},
						{
							headerName: "Requisition",
							field: "requisition",
							resizable: true,
						},
					],
					frameworkComponents: {
						pdfResultRenderer: PdfResultRenderer,
						editBtnCellRenderer: EditBtnCellRenderer,
					},

					defaultColDef: { flex: 1, filter: true },
				},
				getDetailRowData: function (params) {
					Promise.all([
						fetchPatientExpandableData(params.data._id),
						fetchPatientMasterData(window.localStorage.getItem("FACILITY_ID")),
					]).then(([patientExpandableData, patientData]) => {
						if (
							patientExpandableData &&
							patientExpandableData.data &&
							patientExpandableData.data.length > 0
						) {
							const formattedData = patientExpandableData.data.map((item) => {
								const returnData = {
									orderId: item._id,
									patientName: item.patient_id
										? item.patient_id.first_name +
										  " " +
										  item.patient_id.last_name
										: "",
									description:
										item.test_info && item.test_info.description
											? item.test_info.description
											: "",
									testType:
										item.test_info && item.test_info.test_type
											? item.test_info.test_type
											: "",
									sample:
										item.test_info && item.test_info.sample
											? item.test_info.sample
											: "",
									result:
										item.test_info && item.test_info.covid_detected
											? item.test_info.covid_detected
											: "",
									collectedDate:
										item.test_info && item.test_info.collected
											? moment(
													item.test_info.collected,
													"YYYYMMDDHHmmss"
											  ).format("MM/DD/YYYY hh:mm A")
											: "",
									provider:
										(item.provider && item.provider.first_name
											? item.provider.first_name
											: "") +
										" " +
										(item.provider && item.provider.last_name
											? item.provider.last_name
											: ""),
									receivedDate:
										item.test_info && item.test_info.received
											? moment(
													item.test_info.received,
													"YYYYMMDDHHmmss"
											  ).format("MM/DD/YYYY hh:mm A")
											: "",
									requisition:
										item.lab_order_id && item.lab_order_id
											? item.lab_order_id
											: "",
									facilitySource:
										item.facility_id && item.facility_id.name
											? item.facility_id.name
											: item.facility_source,
									code: item.code ? item.code : "",
									codeType: item.code_type ? item.code_type : "",
									pdfPath:
										item.results && item.results.pdf_path
											? item.results.pdf_path
											: "",
								};

								if (item.patient_id && item.patient_id._id) {
									const patientInfo = getPatientInfo(
										patientData.data,
										item.patient_id._id
									);
									returnData.gender = patientInfo
										? patientInfo.gender || ""
										: "";
									returnData.mrn = patientInfo ? patientInfo.mrn : "";
									returnData.dob =
										patientInfo && patientInfo.dob
											? moment(patientInfo.dob, "YYYY-MM-DD").format(
													"MM/DD/YYYY"
											  )
											: "";
									returnData.email = patientInfo ? patientInfo.email : "";
									returnData.mobile = patientInfo ? patientInfo.mobile : "";
								}

								return returnData;
							});
							params.successCallback(formattedData);
						} else {
							params.successCallback([]);
						}
					});
				},
			},
			excelStyles: [
				{
					id: "header",
					interior: {
						color: "#aaaaaa",
						pattern: "Solid",
					},
				},
				{
					id: "body",
					interior: {
						color: "#dddddd",
						pattern: "Solid",
					},
				},
			],
			rowData: null,
			expandableRowData: null,
			facilities: [],
		};
		this.loadFacilities();
	}

	loadFacilities = () => {
		fetchFacilitiesForOrders()
			.then((response) => {
				console.log("facilities", response);
				this.setState({ facilities: response.data });
				/*const filters = this.state.searchFilters;
      filters.facility_id =
        this.facilities && this.facilities.length > 0
          ? this.facilities[0]._id
          : "";
      this.setState({ searchFilters: filters });*/

				const filters = this.state.searchFilters;
				filters.facility_id =
					this.state.facilities &&
					this.state.facilities.length > 0 &&
					this.state.user_role &&
					this.state.user_role.toLowerCase().trim() == "superadmin"
						? ""
						: this.state.facilities[0].facility._id;
				this.setState({ searchFilters: filters });
				this.loadGridData();
			})
			.catch((error) => {
				handleError(error);
			});
	};

	handleFiltersChange = (e) => {
		this.setState({ rowData: [] });
		const filters = this.state.searchFilters;
		if (e.target.name == "facility_id") {
			filters.facility_id = e.target.value;
		}

		this.setState({ searchFilters: filters });
		this.loadGridData();
	};

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.loadGridSchema();
	};

	loadGridData = () => {
		var facility_id =
			this.state.searchFilters.facility_id == ""
				? window.localStorage.getItem("FACILITY_ID")
				: this.state.searchFilters.facility_id;
		fetchPatientMasterData(facility_id)
			.then((data) => {
				this.setState({ rowData: data.data });
			})
			.catch((error) => {
				handleError(error);
			});
	};

	onFilterTextChange = (e) => {
		this.gridApi.setQuickFilter(e.target.value);
	};

	onBtExport = () => {
		this.gridApi.exportDataAsExcel({});
		exportPatients();
	};

	onPageSizeChanged = () => {
		var value = document.getElementById("page-size").value;
		this.gridApi.paginationSetPageSize(Number(value));
	};

	loadGridSchema = () => {
		var userId = window.localStorage.getItem("USER_ID");
		getPatientUserSettings(userId, this.state.gridName)
			.then((patientUserInfo) => {
				const columnState =
					patientUserInfo.data &&
					patientUserInfo.data.grid_state.find((item) => {
						return item.grid_name === "Patient";
					}).columns;
				if (columnState) {
					this.gridColumnApi.applyColumnState({
						state: columnState,
						applyOrder: true,
					});
				} else {
					this.gridColumnApi.resetColumnState();
				}

				const pageSize =
					patientUserInfo.data &&
					patientUserInfo.data.grid_state.find((item) => {
						return item.grid_name === "Patient";
					}).page_size;
				document.getElementById("page-size").value =
					pageSize && pageSize > 0 ? pageSize : 20;
				this.onPageSizeChanged();
			})
			.catch((error) => {
				handleError(error);
			});
	};

	saveState = () => {
		var userId = window.localStorage.getItem("USER_ID");
		const columnState = this.gridColumnApi.getColumnState();
		var pageSize = document.getElementById("page-size").value;

		savePatientSettings(userId, this.state.gridName, columnState, pageSize)
			.then(() => {
				alert("Settings saved successfully !!");
			})
			.catch((error) => {
				handleError(error);
			});
	};

	resetState = () => {
		this.gridColumnApi.resetColumnState();
	};

	clearFilter = () => {
		this.gridApi.setFilterModel(null);
		this.gridApi.setQuickFilter(null);
		document.getElementById("reset-form").value = "";
		const filters = this.state.searchFilters;
		filters.facility_id = "";
		this.setState({ searchFilters: filters });
		this.loadGridData();
	};

	showQrScannerHandler = () => {
		this.setState({
			showQrScanner: true,
		});
	};

	onQrCodeScanHandler = (data) => {
		if (data) {
			this.setState({
				scannedPatientId: data,
			});
			this.showPatientSignupHandler();
		}
	};

	hideQrScannerHandler = () => {
		this.setState({
			showQrScanner: false,
		});
	};

	showPatientSignupHandler = () => {
		this.setState({
			showPatientSignup: true,
		});
		this.hideQrScannerHandler();
	};

	hidePatientSignupHandler = () => {
		this.setState({
			showPatientSignup: false,
		});
	};

	setPatientDetails = (patientDetails) => {
		this.setState({
			patientDetails: patientDetails,
		});
	};

	showCreateRequisitionHandler = () => {
		this.setState({
			showCreateRequisition: true,
		});
		this.hidePatientSignupHandler();
	};

	hideCreateRequisitionHandler = () => {
		this.setState({
			showCreateRequisition: false,
		});
	};

	render() {
		return (
			<div>
				<PatientSearchMenu
					facility_id={this.state.searchFilters.facility_id}
					handleFiltersChange={this.handleFiltersChange}
					facilities={this.state.facilities}
					onFilterTextChange={this.onFilterTextChange}
					clearFilter={this.clearFilter}
					showQrScannerHandler={this.showQrScannerHandler}
					onPageSizeChanged={this.onPageSizeChanged}
					saveState={this.saveState}
					resetState={this.resetState}
					onBtExport={this.onBtExport}
					user_role={this.state.user_role}
				/>
				<QrScanReader
					show={this.state.showQrScanner}
					onQrCodeScanHandler={this.onQrCodeScanHandler}
					hideQrScannerHandler={this.hideQrScannerHandler}
					scannedPatientId={this.state.scannedPatientId}
					showPatientSignupHandler={this.showPatientSignupHandler}
				/>
				<ViewPatientSignUp
					patientId={this.state.scannedPatientId}
					show={this.state.showPatientSignup}
					hidePatientSignupHandler={this.hidePatientSignupHandler}
					showCreateRequisitionHandler={this.showCreateRequisitionHandler}
					setPatientDetails={this.setPatientDetails}
				/>
				<ViewRequisitionFormPage
					show={this.state.showCreateRequisition}
					hideCreateRequisitionHandler={this.hideCreateRequisitionHandler}
					patientDetails={this.state.patientDetails}
				/>

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
							detailCellRendererParams={this.state.detailCellRendererParams}
							onGridReady={this.onGridReady}
							rowData={this.state.rowData}
							frameworkComponents={this.state.frameworkComponents}
							pagination={true}
							paginationPageSize={10}
							paginationNumberFormatter={this.state.paginationNumberFormatter}
							excelStyles={this.state.excelStyles}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ClinicPatientGrid;
