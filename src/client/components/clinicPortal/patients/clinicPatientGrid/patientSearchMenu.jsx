import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import PatientBreadcrumb from "./patientBreadcrumb";

class PatientSearchMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<PatientBreadcrumb />
				<div className="row" style={{ padding: " 12px" }}>
					<div className="col-md-3">
						<FormControl
							variant="outlined"
							style={{ width: "100%", marginTop: "5px" }}
						>
							<InputLabel id="facility-label">Select Facility</InputLabel>
							<Select
								labelId="facility-label"
								id="facility-select"
								value={this.props.facility_id}
								onChange={this.props.handleFiltersChange}
								label="Select Facility"
								className="form-Control"
								name="facility_id"
							>
								<MenuItem value="-1"> Select Facility </MenuItem>
								{this.props.facilities.map((fac) => {
									return (
										<MenuItem
											key={
												this.props.user_role &&
												this.props.user_role.toLowerCase().trim() ==
													"superadmin"
													? fac._id
													: fac.facility._id
											}
											value={
												this.props.user_role &&
												this.props.user_role.toLowerCase().trim() ==
													"superadmin"
													? fac._id
													: fac.facility._id
											}
											//value={fac._id}
										>
											{/* {fac.facility.name} */}
											{this.props.user_role &&
											this.props.user_role.toLowerCase().trim() == "superadmin"
												? fac.name
												: fac.facility.name}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</div>
					<div className="col-md-2">
						<TextField
							label="Quick Search"
							variant="outlined"
							className="form-control"
							id="reset-form"
							InputLabelProps={{
								shrink: true,
							}}
							type="string"
							margin="dense"
							onChange={this.props.onFilterTextChange}
						/>
					</div>
					<div>
						<button
							className="btn btn-primary submit-btn button-info-grid"
							onClick={() => this.props.clearFilter()}
						>
							<i class="fa fa-times" aria-hidden="true"></i> Clear Filter
						</button>
					</div>
					<div>
						<button
							onClick={this.props.showQrScannerHandler}
							className="btn btn-primary submit-btn button-info-grid"
						>
							<i className="fa fa-qrcode" aria-hidden="true"></i> Scan QR Code
						</button>
					</div>
					<div className="col grid-buttons">
						<div>
							<TextField
								style={{ width: "100px", height: "40px" }}
								label="Page Size"
								variant="outlined"
								className="form-control"
								id="page-size"
								InputLabelProps={{
									shrink: true,
								}}
								type="number"
								margin="dense"
								onChange={this.props.onPageSizeChanged}
							/>
						</div>
						<div>
							<button
								className="btn btn-primary submit-btn button-info-grid"
								onClick={() => this.props.saveState()}
							>
								<i class="far fa-save"></i> Save
							</button>
							<button
								className="btn btn-primary submit-btn button-info-grid"
								onClick={() => this.props.resetState()}
							>
								{" "}
								<i class="fa fa-repeat"></i> Default
							</button>
						</div>
						<div>
							<button
								className="btn btn-primary submit-btn button-info-grid"
								onClick={() => this.props.onBtExport()}
							>
								<i class="fa fa-file-excel-o" aria-hidden="true"></i> Export to
								Excel
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PatientSearchMenu;
