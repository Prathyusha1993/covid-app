

export const fetchPatientMasterData = () => {
    return fetch(` https://www.mycovidnow.com/api/patient/v1/`)
    .then((response) => response.json());
}


export const fetchPatientExpandableData = (patiendId) => {
    return fetch(`https://www.mycovidnow.com/api/order/v1/search`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify({ "patient_id":  patiendId})
    })
    .then((response) => response.json())
}