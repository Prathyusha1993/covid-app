import {serviceConstants} from './constants';

// export const authenticateAndFetchUserDetails = (contactInfo, dob) => {

//     var input = {};
//     if(Number.isInteger(contactInfo) === true && contactInfo.length === 10){
//         input = {
//                 "mobile" : contactInfo,
//                 "date_of_birth" : dob
//         };
//     }
//     else{
//         input = {
//                 "email" : contactInfo,
//                 "date_of_birth" : dob
//         };
//     }
//     console.log("input", input)
//     return fetch('http://3.137.173.35:6061/patient/v1/verify', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body : JSON.stringify(input)
        
//     })
//     .then(response => {
//         console.log(response);
//         if(response.ok) {
//             return response.json();
//         } else {
//             return Promise.reject('invalid credentials')
//         }
//     });
    
// }


export const authenticateAndFetchUserDetails = (loginInfo) => {
    console.log(loginInfo);
    return fetch(`http://${serviceConstants.HOST_NAME}/patient/v1/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(loginInfo)
        
    })
    .then(response => {        
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject('invalid credentials')
        }
    })
    .then(data => {       
        return data;
    });
    
}