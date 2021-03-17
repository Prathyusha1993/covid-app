import {serviceConstants} from './constants';

export const fetchDashboardDetails = (patientInfo) => {
   //console.log('patientInfo from index' , patientInfo);
    return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
                },
        body : JSON.stringify(patientInfo)
      })
        .then(response => response.json());
  }