import { serviceConstants } from "../patientPortalServices/constants";


export const fetchOrderEditData = (editParams) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ 
            'test': editParams && editParams.test_info.description ? editParams.test_info.description : '',
            'sample': editParams && editParams.test_info.sample ? editParams.test_info.sample : '',
            'result': editParams && editParams.test_info.covid_detected ? editParams.test_info.covid_detected  : '',
            'collectedDate': editParams && editParams.test_info.collected ? editParams.test_info.collected : '',
            'receivedDate': editParams && editParams.test_info.received ? editParams.test_info.received : '',
            'requisition': editParams && editParams.test_info.requisition ? editParams.test_info.requisition : '',
            
         } )
	}
	).then((response) => response.json());
};