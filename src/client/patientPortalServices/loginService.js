import {serviceConstants} from './constants';

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