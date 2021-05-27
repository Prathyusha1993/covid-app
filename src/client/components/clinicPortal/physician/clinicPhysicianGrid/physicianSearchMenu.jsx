import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import AddPhysician from "./addPhysician";
import PhysicianBreadcrumb from "./physicianBreadcrumb";

class PhysicianSearchMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
                <PhysicianBreadcrumb />
                <div className="row" style={{ padding: "12px" }}>
					<div className="col-md-3">
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
					<div className="col grid-buttons">
						<div>
							<AddPhysician />
						</div>
						<div>
							<button
								className="btn btn-primary submit-btn button-info-grid"
								onClick={() => this.props.onBtExport()}
							>
								<i class="fa fa-file-excel-o" aria-hidden="true"></i> Export
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PhysicianSearchMenu;
