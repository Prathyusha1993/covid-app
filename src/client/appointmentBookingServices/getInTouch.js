

export const getInTouchDetails = (toEmail, subject, body) =>  {
    
    return fetch(`https://www.mycovidnow.com/api/misc/v2/email`, {
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