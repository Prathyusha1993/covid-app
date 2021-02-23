export const fetchDashboardDetails = (patient_id) => {
    const patientId = window.localStorage.getItem('_id');
    return fetch('http://3.137.173.35:3000/order/v1/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Id' : patientId,
                },
        body : JSON.stringify({patient_id: patient_id})
      })
        .then(response => response.json());
  }