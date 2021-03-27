import { serviceConstants } from "../patientPortalServices/constants";


export const fetchOrderEditData = (editParams) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ 
            'test': editParams && editParams.description ? editParams.description : '',
			'testType': editParams && editParams.testType ? editParams.testType : '',
            'sample': editParams && editParams.sample ? editParams.sample : '',
            'result': editParams && editParams.result ? editParams.result  : '',
            'collectedDate': editParams && editParams.collectedDate ? editParams.collectedDate : '',
            'provider': editParams && editParams.provider ? editParams.provider : '',
            'receivedDate': editParams && editParams.receivedDate ? editParams.receivedDate : '',
			'requisition': editParams && editParams.requisition ? editParams.requisition : '',
            'patientName': editParams && editParams.patientName ? editParams.patientName : '',
         } )
	}
	).then((response) => response.json());
};