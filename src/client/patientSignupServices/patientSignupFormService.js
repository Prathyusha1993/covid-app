

export const patientSignup = () => {
    return fetch(`https://www.mycovidnow.com/api/patient/v1/insurance`, {
        method: 'POST',
        headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
        body: {
            
        }
    })
}