import {serviceConstants} from './constants';

export const fetchDashboardDetails = (patient_id) => {
    const patientId = window.localStorage.getItem('PATIENT_ID');
    return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
                },
        body : JSON.stringify({patient_id: patient_id})
      })
        .then(response => response.json());
  }