import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { resultsSearch } from "../../../../services/common/optionsData";
import OrderBreadcrumb from './orderBreadcrumb';

class OrderSearchMenu extends Component {
    constructor(props){
        super(props);
        this.state={}
    };

    render() {
        return(
            <div>
                <OrderBreadcrumb />
                <div className="row" style={{ padding: "12px" }}>
					<div
						className="col-md-8"
						style={{ borderRight: "2px solid lightGray" }}
					>
						<div className="row">
							<div className="col-md-6">
								<FormControl
									variant="outlined"
									style={{ width: "100%", marginTop: "5px" }}
								>
									<InputLabel id="facility-label">Select Facility</InputLabel>
									<Select
										labelId="facility-label"
										id="facility-select"
										value={this.props.facilityId}
										onChange={this.props.handleFiltersChange}
										label="Select Facility"
										className="form-Control"
										name="facility_id"
									>
										<MenuItem value=""> Select Facility </MenuItem>
										{this.props.facilities.map((fac) => {
											return (
												<MenuItem key={fac._id} value={fac._id}>
													{fac.name}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>
							</div>
							<div className="col-md-3">
								<TextField
									id="fromDate"
									label="From Date"
									type="date"
									name="from_date"
									value={this.props.from_date}
									className="form-control"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={this.props.handleFiltersChange}
								/>
							</div>
							<div className="col-md-3">
								<TextField
									id="toDate"
									label="To Date"
									type="date"
									name="to_date"
									value={this.props.to_date}
									className="form-control"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={this.props.handleFiltersChange}
								/>
							</div>
						</div>
						<div className="row" style={{ marginTop: "10px" }}>
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
							<div className="col-md-9">
								<FormControl component="fieldset">
									<FormLabel component="legend" style={{ marginBottom: "0px" }}>
										Result
									</FormLabel>
									<RadioGroup
										aria-label="result"
										name="result_value"
										value={this.props.result_value}
										onChange={this.props.handleFiltersChange}
										style={{ flexDirection: "row" }}
									>
										{resultsSearch.map((res) => {
											return (
												<FormControlLabel
													value={res.code}
													control={<Radio />}
													label={res.value}
												/>
											);
										})}
									</RadioGroup>
								</FormControl>
								<span>
									<button
										Tooltip="Clear Filters"
										className="btn btn-primary submit-btn button-info-grid"
										onClick={() => this.props.clearFilter()}
									>
										<i class="fa fa-times" aria-hidden="true"></i> Clear Filters
									</button>
								</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="col grid-buttons">
							<div>
								<TextField
									style={{ width: "100px" }}
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
									<i class="fa fa-file-excel-o" aria-hidden="true"></i> Export
								</button>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}

export default OrderSearchMenu;