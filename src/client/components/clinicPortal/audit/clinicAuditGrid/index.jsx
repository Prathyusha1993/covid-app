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
import AuditSearchMenu from "./auditSearchMenu";
import {handleError} from '../../../../services/common/errorHandler';

//service calls
import { getAuditData } from "../../../../services/clinicPortalServices/auditService";
import moment from "moment";

class ClinicAuditGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
					headerName: "Action",
					minWidth: 150,
					field: "action",
					resizable: true,
					hide: true,
				},
				{
					headerName: "Identifier",
					minWidth: 150,
					field: "identifier",
					resizable: true,
				},
				{
					headerName: "Event Type",
					minWidth: 150,
					field: "event_type",
					resizable: true,
				},
				{
					headerName: "Application",
					minWidth: 150,
					field: "application",
					resizable: true,
				},
				{
					headerName: "User Name",
					field: "user_name",
					minWidth: 150,
					resizable: true,
				},
				{
					headerName: "Record ID",
					field: "record_id",
					minWidth: 200,
					resizable: true,
				},
				{
					headerName: "IP Address",
					minWidth: 150,
					resizable: true,
					field: "ip_address",
				},
				{
					headerName: "Timestamp",
					field: "createdAt",
					minWidth: 200,
					resizable: true,
					cellRenderer: (params) => {
						return moment(params.data.createdAt).format(
							"MM/DD/YYYY hh:mm:ss A"
						);
					},
				},
			],

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
		this.loadAuditGridData();
	};

	loadAuditGridData = () => {
		getAuditData()
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

	clearFilter = () => {
		this.gridApi.setFilterModel(null);
		this.gridApi.setQuickFilter(null);
		document.getElementById("reset-form").value = "";
	};

	render() {
		return (
			<div>
				<AuditSearchMenu
					onFilterTextChange={this.onFilterTextChange}
					clearFilter={this.clearFilter}
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
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ClinicAuditGrid;
