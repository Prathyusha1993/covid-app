import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

//service calls
import { getAuditData } from "../../../../clinicPortalServices/auditService";

class AuditGridDetails extends Component {
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
					headerName: "Action",
					minWidth: 150,
					field: "action",
				},
				{
					headerName: "Identifier",
					minWidth: 150,
					field: "identifier",
				},
				{
					headerName: "Event Type",
					minWidth: 150,
					field: "event_type",
				},
				{
					headerName: "Application",
					minWidth: 150,
					field: "application",
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
				},
			],

			defaultColDef: {
				flex: 1,
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
		getAuditData().then((data) => {
			this.setState({ rowData: data.data });
		});
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
											Audit
										</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Audit</h2>
							</div>
						</div>
					</div>
				</div>
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
							//frameworkComponents={this.state.frameworkComponents}
							pagination={true}
							paginationAutoPageSize={true}
							//paginationPageSize={20}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default AuditGridDetails;
