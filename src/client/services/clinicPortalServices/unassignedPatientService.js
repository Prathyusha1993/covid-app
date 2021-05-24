import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../../utils/util";

export const fetchUnassignedPatientData = (facilityId) => {
	var token = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/unassigned`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify({ facility_id: facilityId }),
	}).then((response) => response.json());
};

export const fetchUnassignedPatientDetails = (patientId) => {
	var token = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/details`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},

		body: JSON.stringify({ patient_id: patientId }),
	}).then((response) => response.json());
};

export const updateUnassignedPatientDetails = (patientDetails) => {
	var token = getUserAuthToken();
	var patientInfo = {
		_id: patientDetails.patientId,
		first_name: patientDetails.firstName,
		last_name: patientDetails.lastName,
		email: patientDetails.email,
		mobile: patientDetails.phone,
		date_of_birth: patientDetails.dob,
		gender: patientDetails.sex,
		mrn: "",
		ethnicity: patientDetails.ethnicity,
		race: patientDetails.race,
		is_assigned: false,
		is_active: false,
		address: {
			address1: patientDetails.address,
			address2: "",
			city: patientDetails.city,
			state: patientDetails.state,
			zip: patientDetails.zipCode,
		},
		health_info: {
			record_date: "05012021",
			symptoms: patientDetails.symptoms,
		},
		insurance: {
			_id: patientDetails.insuranceId,
			insured_first_name: patientDetails.insuredFirstName,
			insured_last_name: patientDetails.insuredLastName,
			insured_member_id: patientDetails.memberId,
			insured_group_number: patientDetails.groupNum,
			insured_drivers_license: patientDetails.driverLic,
			insurance_provider:
				patientDetails.insuranceProv1.toLowerCase() == "other"
					? patientDetails.insuranceProv2
					: patientDetails.insuranceProv1,
			relation_to_insured: patientDetails.relation,
			is_active: true,
			patient: patientDetails.patientId,
			images: {
				drivers_license: patientDetails.driverLicFileName,
				insurance_front: patientDetails.insuranceFrontPageFileName,
				insurance_back: patientDetails.insuranceBackPageFileName,
			},
		},
	};
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/insurance`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},

		body: JSON.stringify(patientInfo),
	}).then((response) => response.json());
};
