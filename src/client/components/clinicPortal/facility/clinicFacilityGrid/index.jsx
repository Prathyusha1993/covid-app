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
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

import EditBtnCellRenderer from "./editBtnCellRenderer";

//service calls
import { getFacilityData } from "../../../../services/clinicPortalServices/facilityServices";
import FacilitySearchMenu from "./facilitySearchMenu";
import {handleError} from '../../../../services/common/errorHandler';

class ClinicFacilityGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			name: "",
			code: "",
			contactName: "",
			phoneNum: "",
			contactEmail: "",
			faxNum: "",
			address: "",
			emailNotification: "",
			environmentalMonitoring: "",
			faxType: "",
			isActive: "",
			errors: [],
			modules: [
				ClientSideRowModelModule,
				MasterDetailModule,
				MenuModule,
				ColumnsToolPanelModule,
				SetFilterModule,
				FiltersToolPanelModule,
				AllCommunityModules,
				AllModules,
				ExcelExportModule,
			],
			columnDefs: [
				{
					headerName: "Actions",
					minWidth: 100,
					cellStyle: { textAlign: "center" },
					cellRenderer: "editBtnCellRenderer",
				},
				{
					headerName: "Code",
					minWidth: 150,
					field: "code",
					resizable: true,
				},
				{
					headerName: "Name",
					minWidth: 150,
					field: "name",
					resizable: true,
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
								params.data.address.zip +
								" " +
								params.data.address.country
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
				{
					headerName: "Contact Name",
					minWidth: 150,
					field: "contact_name",
					resizable: true,
				},
				{
					headerName: "Phone #",
					field: "phone_no",
					minWidth: 150,
					resizable: true,
					cellRenderer: function (params) {
						return params.data.phone_no
							? '<span><i class="fas fa-phone-alt"></i> ' +
									params.data.phone_no +
									"</span>"
							: "";
					},
				},
				{
					headerName: "Email",
					field: "contact_email",
					minWidth: 150,
					resizable: true,
					cellRenderer: function (params) {
						return params.data.contact_email
							? '<span><i class="fas fa-envelope"></i> ' +
									params.data.contact_email +
									"</span>"
							: "";
					},
				},
				{
					headerName: "Fax #",
					minWidth: 150,
					resizable: true,
					field: "fax_no",
				},
				{
					headerName: "Fax Type",
					field: "fax_type",
					minWidth: 150,
					resizable: true,
				},
				{
					headerName: "Email Notifications",
					field: "email_notifications_enabled",
					minWidth: 170,
					resizable: true,
				},
				{
					headerName: "Environmental Monitoring",
					field: "environmental_monitoring_enabled",
					minWidth: 200,
					resizable: true,
				},
			],
			frameworkComponents: {
				editBtnCellRenderer: EditBtnCellRenderer,
			},

			defaultColDef: {
				flex: 1,
				filter: true,
				sortable: true,
			},
			rowData: null,
		};
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		this.loadFacilityGridData();
	};

	loadFacilityGridData = () => {
		getFacilityData()
			.then((response) => {
				this.setState({ rowData: response.data });
			})
			.catch((error) => {
				handleError(error);
			});
	};

	onFilterTextChange = (e) => {
		this.gridApi.setQuickFilter(e.target.value);
	};

	clearFilter = () => {
		this.gridApi.setFilterModel(null);
		this.gridApi.setQuickFilter(null);
		document.getElementById("reset-form").value = "";
	};

	onBtExport = () => {
		this.gridApi.exportDataAsExcel({});
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
				<FacilitySearchMenu
					onFilterTextChange={this.onFilterTextChange}
					clearFilter={this.clearFilter}
					onBtExport={this.onBtExport}
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
							pagination={true}
							paginationAutoPageSize={true}
							frameworkComponents={this.state.frameworkComponents}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ClinicFacilityGrid;
