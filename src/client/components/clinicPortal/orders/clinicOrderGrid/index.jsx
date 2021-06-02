import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";

import moment from "moment";
import { Tooltip } from "react-bootstrap";

import EditBtnCellRenderer from "./editBtnCellRenderer";
import PdfResultRenderer from "./pdfResultRenderer";

//service calls
import {
	exportOrders,
	searchOrders,
} from "../../../../services/clinicPortalServices/orderSearchService";
import { getOrderUserSettings } from "../../../../services/clinicPortalServices/userGridSettings";
import { saveOrderSettings } from "../../../../services/clinicPortalServices/saveStateSettings";
import { fetchPatientMasterData } from "../../../../services/clinicPortalServices/patientSearchService"; //fetchFacilities
import { fetchFacilitiesForOrders } from "../../../../services/clinicPortalServices/facilityServices";
import { serviceConstants } from "../../../../services/common/constants";
import { getUserRole } from "../../../../services/common/util";
import OrderSearchMenu from "./orderSearchMenu";
import { handleError } from "../../../../services/common/errorHandler";

var enterprise = require("@ag-grid-enterprise/core");
enterprise.LicenseManager.setLicenseKey(
	`${serviceConstants.AG_GRID_LICENSE_KEY}`
);

const getPatientInfo = (patientData, patientId) => {
	if (patientData && patientData.length > 0) {
		const foundPatientInfo = patientData.find((item) => {
			return item._id === patientId;
		});
		if (foundPatientInfo == null) return {};
		return {
			gender: foundPatientInfo.gender || "",
			mrn: foundPatientInfo.mrn,
			dob: foundPatientInfo.date_of_birth,
			email: foundPatientInfo.email,
			mobile: foundPatientInfo.mobile,
		};
	}
};

class ClinicOrderGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user_role: getUserRole(),
			searchFilters: {
				facility_id: "",
				from_date: moment().subtract(3, "days").format("YYYY-MM-DD"),
				to_date: moment().format("YYYY-MM-DD"),
				result_value: "all",
			},
			modules: [
				ClientSideRowModelModule,
				MasterDetailModule,
				MenuModule,
				ColumnsToolPanelModule,
				AllCommunityModules,
				AllModules,
				ExcelExportModule,
				SetFilterModule,
				FiltersToolPanelModule,
			],
			gridName: "Order",
			pageSize: "",
			columnDefs: [
				{
					headerName: "Actions",
					minWidth: 100,
					// maxWidth: 150,
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
					field: "description",
				},

				{
					headerName: "Test Type",
					minWidth: 150,
					field: "testType",
					filter: "agSetColumnFilter",
				},
				{
					headerName: "Sample",
					minWidth: 150,
					field: "sample",
				},
				{
					headerName: "Result",
					field: "result",
					minWidth: 150,
					resizable: true,
					cellRenderer: "pdfResultRenderer",
					filter: "agSetColumnFilter",
				},
				{
					headerName: "Specimen Collected Date",
					field: "collectedDate",
					minWidth: 200,
					resizable: true,
				},
				{
					headerName: "Facility Source",
					minWidth: 150,
					resizable: true,
					field: "facilitySource",
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
					minWidth: 150,
					field: "requisition",
				},
			],
			frameworkComponents: {
				editBtnCellRenderer: EditBtnCellRenderer,
				pdfResultRenderer: PdfResultRenderer,
			},
			paginationNumberFormatter: function (params) {
				return "[" + params.value.toLocaleString() + "]";
			},
			defaultColDef: {
				flex: 1,
				filter: true,
				//enableRowGroup: true,
				//enablePivot: true,
				//enableValue: true,
				sortable: true,
			},
			rowData: null,
			//sideBar: { toolPanels: ["columns"] },
			//rowGroupPanelShow: "always",
			//pivotPanelShow: "always",
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
			facilities: [],
		};
		this.loadFacilities();
	}

	loadFacilities = () => {
		fetchFacilitiesForOrders()
			.then((response) => {
				console.log("orders-facilities", response);
				this.setState({ facilities: response.data });
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
		switch (e.target.name) {
			case "result_value": {
				filters.result_value = e.target.value;
				break;
			}
			case "from_date": {
				filters.from_date = e.target.value;
				break;
			}
			case "to_date": {
				filters.to_date = e.target.value;
				break;
			}
			case "facility_id": {
				filters.facility_id = e.target.value;
				break;
			}
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
		var facilityID = window.localStorage.getItem("FACILITY_ID");
		Promise.all([
			//fetchOrderMasterData(facilityID),
			searchOrders(this.state.searchFilters),
			fetchPatientMasterData(facilityID),
		])
			.then(([orderData, patientData]) => {
				if (orderData && orderData.data && orderData.data.length > 0) {
					const formattedData = orderData.data.map((item) => {
						const returnData = {
							orderId: item._id,
							patientName: item.patient_id
								? item.patient_id.first_name + " " + item.patient_id.last_name
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
									? moment(item.test_info.collected, "YYYYMMDDHHmmss").format(
											"MM/DD/YYYY hh:mm A"
									  )
									: "",
							facilitySource:
								item.facility_id && item.facility_id.name
									? item.facility_id.name
									: item.facility_source,
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
									? moment(item.test_info.received, "YYYYMMDDHHmmss").format(
											"MM/DD/YYYY hh:mm A"
									  )
									: "",
							requisition:
								item.lab_order_id && item.lab_order_id ? item.lab_order_id : "",

							code: item.code ? item.code : "",
							codeType: item.code_type ? item.code_type : "",
							pdfPath:
								item.results && item.results.pdf_path
									? item.results.pdf_path
									: "",
							released:
								item.results && item.results.released
									? moment(item.results.released, "YYYYMMDDHHmmss").format(
											"MM/DD/YYYY hh:mm A"
									  )
									: "",
							releasedBy:
								item.results && item.results.releasedBy
									? item.results.releasedBy
									: "",

							refreshGrid: this.loadGridData,
						};

						if (item.patient_id && item.patient_id._id) {
							const patientInfo = getPatientInfo(
								patientData.data,
								item.patient_id._id
							);
							returnData.gender = patientInfo ? patientInfo.gender || "" : "";
							returnData.mrn = patientInfo ? patientInfo.mrn : "";
							returnData.dob =
								patientInfo && patientInfo.dob
									? moment(patientInfo.dob, "YYYY-MM-DD").format("MM/DD/YYYY")
									: "";
							returnData.email = patientInfo ? patientInfo.email : "";
							returnData.mobile = patientInfo ? patientInfo.mobile : "";
						}

						return returnData;
					});
					this.setState({ rowData: formattedData });
				} else this.setState({ rowData: [] });
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
		exportOrders();
	};

	onPageSizeChanged = () => {
		var value = document.getElementById("page-size").value;
		this.gridApi.paginationSetPageSize(Number(value));
	};

	loadGridSchema = () => {
		var userId = window.localStorage.getItem("USER_ID");
		getOrderUserSettings(userId, this.state.gridName)
			.then((orderUserInfo) => {
				const columnState =
					orderUserInfo.data &&
					orderUserInfo.data.grid_state.find((item) => {
						return item.grid_name === "Order";
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
					orderUserInfo.data &&
					orderUserInfo.data.grid_state.find((item) => {
						return item.grid_name === "Order";
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

		saveOrderSettings(userId, this.state.gridName, columnState, pageSize)
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

		this.setState({ rowData: [] });
		const filters = this.state.searchFilters;

		filters.result_value = "all";

		filters.from_date = moment().subtract(3, "days").format("YYYY-MM-DD");
		filters.to_date = moment().format("YYYY-MM-DD");
		filters.facility_id = "";

		this.setState({ searchFilters: filters });
		this.loadGridData();
	};
	renderTooltipClearFilters = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Clear Filters
		</Tooltip>
	);
	render() {
		return (
			<div>
				<OrderSearchMenu
					facilityId={this.state.searchFilters.facility_id}
					handleFiltersChange={this.handleFiltersChange}
					facilities={this.state.facilities}
					from_date={this.state.searchFilters.from_date}
					to_date={this.state.searchFilters.to_date}
					onFilterTextChange={this.onFilterTextChange}
					result_value={this.state.searchFilters.result_value}
					clearFilter={this.clearFilter}
					onPageSizeChanged={this.onPageSizeChanged}
					saveState={this.saveState}
					resetState={this.resetState}
					onBtExport={this.onBtExport}
					user_role={this.state.user_role}
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
							onGridReady={this.onGridReady}
							rowData={this.state.rowData}
							frameworkComponents={this.state.frameworkComponents}
							pagination={true}
							paginationPageSize={20}
							paginationNumberFormatter={this.state.paginationNumberFormatter}
							excelStyles={this.state.excelStyles}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ClinicOrderGrid;
