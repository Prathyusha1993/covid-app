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
//     return fetch('http://3.137.173.35:3000/patient/v1/verify', {
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

export const authenticateAndFetchUserDetails = (contactInfo, dob) => {
    if((contactInfo==="johndoe@gmail.com" || contactInfo ==="8766788987") && dob==="10/30/1970")
    {
        return {
            "status": 200,
            "data": [
                {
                    "_id": "6032672222fd8c47b4d60cd3",
                    "first_name": "John",
                    "last_name": "Doe",
                    "email": "johndoe@gmail.com",
                    "mobile": "8766788987",
                    "date_of_birth": "10/30/1970",
                    "ids": [],
                    "createdAt": "2021-02-21T13:58:58.493Z",
                    "updatedAt": "2021-02-21T13:58:58.493Z",
                    "__v": 0
                }
            ],
            "message": "Succesfully Patients Retrieved"
        }
       
    }
    else{
        return {"status": 400,
        "data": [ ],
        "message": "Error in Patients Retrieved"
    }

    }
}