

export const getInTouchDetails = (toEmail, subject, info) =>  {
    var updatedInfo = {
        firstName: info.firstName ,
        lastName: info.lastName ,
        mobile: info.mobile ,
        email: info.email ,
        testingNeeds: info.testingNeeds,
    }
    return fetch(`https://www.mycovidnow.com/api/misc/v2/email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // 'toEmail': toEmail,
            // 'subject': subject,
            'toEmail': "prathyusha9310@gmail.com",
            'subject': "Contact Us",
            'body': updatedInfo,
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