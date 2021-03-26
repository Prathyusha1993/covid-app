import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import { fetchOrderMasterData } from "../../../../clinicPortalServices/orderSearchService";
import moment from "moment";
import EditBtnCellRenderer from "./EditBtnCellRenderer";

class OrderGridDetails extends Component {
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
					headerName: "Edit",
					minWidth: 100,
					cellStyle: { textAlign: 'center' },
					 cellRenderer: 'editBtnCellRenderer',
				},
				{ headerName: "Test", minWidth:150, field: "test_info.description" },
				{ headerName: "Test Type", minWidth:150, field: "test_info.test_type" },
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
							"MM/DD/YYYY h:mm a"
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
							"MM/DD/YYYY h:mm a"
						);
					},
				},
				{
					headerName: "Requisition",
					field: "test_info.requisition",
				},
			],
			frameworkComponents: {
				editBtnCellRenderer: EditBtnCellRenderer,
			},
			defaultColDef: { flex: 1 },
			rowData: null,
		};
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;

		fetchOrderMasterData().then((data) => {
			this.setState({ rowData: data.data });
		});
	};

	render() {
		return (
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
		);
	}
}

export default OrderGridDetails;
