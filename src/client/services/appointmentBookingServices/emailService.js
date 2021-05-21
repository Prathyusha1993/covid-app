import { serviceConstants } from "../../patientPortalServices/constants";

export const getInTouchDetails = (toEmail, subject, body) =>  {
    
    return fetch(`${serviceConstants.API_HOST_NAME}/notifications/v1/email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'toEmail': toEmail,
            'subject': subject,
            // 'toEmail': "prathyusha9310@gmail.com",
            // 'subject': "Contact Us",
            'body': body,
        })
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            console.log("Something went wrong");
        }
        
    })
};