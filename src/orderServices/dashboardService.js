import {serviceConstants} from './constants';

export const fetchDashboardDetails = (patient_id) => {
    const patientId = window.localStorage.getItem('_id');
    return fetch(`http://${serviceConstants.HOST_NAME}/order/v1/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Id' : patientId,
                },
        body : JSON.stringify({patient_id: patient_id})
      })
        .then(response => response.json());
  }