import { serviceConstants } from "../patientPortalServices/constants";

export const saveOrderEditData = (editParams) => {
	if(! editParams) throw "Order obj is null";
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
	console.log(updatedOrder);	
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		
		body: JSON.stringify(updatedOrder),
	}).then((response) => response.json());
};

export const updateResultPDF = (params) => {
	if(! params) throw "Order obj is null";

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
		released_by:params.releasedBy
	};
	console.log(updatedOrder);	
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/update/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		
		body: JSON.stringify(updatedOrder),
	}).then((response) => response.json());
};