import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../common/util";

export const saveOrderEditData = (editParams) => {
	if(! editParams) throw new Error("Order obj is null");
	var token  = getUserAuthToken();
	var updatedOrder  = {
		test_info: {		   
			sample: editParams.sample ,
			collected: editParams.collectedDate ,
			received: editParams.receivedDate ,
			covid_detected: editParams.result,
			code: editParams.code,
			code_type: editParams.codeType,
			description: editParams.description,
			test_type: editParams.testType,

		},	  
		_id: editParams.orderId,  
		lab_order_id: editParams.requisition
	   
	};
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		
		body: JSON.stringify(updatedOrder),
	}).then((response) => response.json());
};

export const updateResultPDF = (params) => {
	if(! params) throw new Error("Order obj is null");
	var token  = getUserAuthToken();
	var updatedOrder= {
		patient_name:params.patientName,
		date_of_birth:params.dob,
		mrn:params.mrn,
		email:params.email,
		mobile:params.mobile,
		requisition:params.requisition,
		sample:params.sample,
		collected: params.collectedDate,
		received:params.receivedDate,
		provider_name:params.provider,
		facility_source:params.facilitySource,
		value:params.result,
		pdf_path:params.pdfPath,
		released_date:params.released,
		released_by:params.releasedBy,
		test_type: params.testType,
	};	
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/update/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		
		body: JSON.stringify(updatedOrder),
	}).then((response) => response.json());
};

export const fetchOrderFaxData = (orderId) => {
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/fax/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		
		body: JSON.stringify({order_id : orderId}),
	}).then((response) => response.json());
};

export const getOrderDataById = (orderId) => {
	let token = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/${orderId}`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
	}).then((response) => response.json());
};