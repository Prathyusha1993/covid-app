import { serviceConstants } from "../patientPortalServices/constants";


export const fetchPatientEditData = (editParams) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v2/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ 
            '_id': editParams._id,
            'first_name': editParams && editParams.first_name ? editParams.first_name : '',
            'last_name': editParams && editParams.last_name ? editParams.last_name : '',
            'email': editParams && editParams.email ? editParams.email : '',
            'mobile': editParams && editParams.mobile ? editParams.mobile : '',
            'date_of_birth': editParams && editParams.date_of_birth ? editParams.date_of_birth : '',
            'address1': editParams && editParams.address.address1 ? editParams.address.address1 : '',
            'address2': editParams && editParams.address.address2 ? editParams.address.address2 : '',
            'city': editParams && editParams.address.city ? editParams.address.city : '',
            'state': editParams && editParams.address.state ? editParams.address.state : '',
            'zip': editParams && editParams.address.zip ? editParams.address.zip : '',
            'country': editParams && editParams.address.country ? editParams.address.country : '',

         } )
	}
	).then((response) => response.json());
};