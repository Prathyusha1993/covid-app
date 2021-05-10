import { getUserAuthToken } from "../utils/util";
import { serviceConstants } from "../patientPortalServices/constants";

export const generateUniqueKey = () => {
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/uniquekey`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
	})
	.then((response) => response.json());
}

export const saveRequisitionChanges = (reqInfo) => {
	if(! reqInfo) throw "Order obj is null";
	var token  = getUserAuthToken();
	var updatedRequisition  = {
		provider:{
            first_name: reqInfo.providerFirstName,
            last_name: reqInfo.providerLastName,
            npi: reqInfo.providerNPI
        },
        test_info:{
            code: reqInfo.testInfoCode,
            code_type: reqInfo.testInfoCodeType,
            description: reqInfo.testInfoDescription,
            test_type: reqInfo.testType,
            sample:reqInfo.sample,
            collected: reqInfo.collectedDate,
            collector_name: reqInfo.collectorName,
            received: reqInfo.receivedDate,
            requisition: reqInfo.requisition,
            covid_detected: reqInfo.covidDetected,
        },
        results:{
            code: reqInfo.resultCode,
            code_type: reqInfo.resultCodeType,
            description: reqInfo.resultDesc,
            value: reqInfo.value,
            comments: reqInfo.comments,
            pdf_path: reqInfo.pdfPath,
            result_date: reqInfo.resultDate,
            released: reqInfo.released,
            releasedBy: reqInfo.releasedBy,
        },
        patient_id: reqInfo.patientId,
        facility_id: reqInfo.facilityId,
        order_date: reqInfo.orderDate,
        facility_order_id: reqInfo.facilityOrderId,
        facility_source: reqInfo.facilitySource,
        lab_order_id: reqInfo.labOrderId,
        lab_source: reqInfo.labSource
	};
	//console.log("updatedRequisition",JSON.stringify(updatedRequisition));	
    
	return fetch(` ${serviceConstants.API_HOST_NAME}/order/v1/requisition`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		
		body: JSON.stringify(updatedRequisition),
	}).then((response) => response.json());
};
