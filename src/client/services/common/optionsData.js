export const identity = [
    {
		value: "",
		gender: "Please Select",
	},
	{
		value: "M",
		gender: "Male",
	},
	{
		value: "F",
		gender: "Female",
	},
	{
		value: "U",
		gender: "Unknown",
	},
	{
		value: "N",
		gender: "Not Specified",
	},
];

export const testTypes = [
	{
		value: "",
		testType: "Please Select"
	},
	{
		value: "Nasal Swab",
		testType: "Nasal Swab",
	},
	{
		value: "Nasopharyngeal Swab",
		testType: "Nasopharyngeal Swab",
	}
];

export const results = [
	{
		result: "SARS-CoV-2 Not Detected",
	},
	{
		result: "SARS-CoV-2 Detected",
	},
	{
		result: "SARS-CoV-2 Inconclusive",
	},
	{
		result: "Positive SARS-CoV-2",
	},
	{
		result: " "
	}
];

export const resultsSearch = [
	{
		code: "all",
		value: "All",
	},
	{
		code: "positive",
		value: "Positive",
	},
	{
		code: "negative",
		value: "Negative",
	},
	{
		code: "inconclusive",
		value: "Inconclusive",
	},
];

export const faxTypes =[
	{
		value: "Please Select",
		testType: "Please Select"
	},
	{
		value: "NoFax",
		faxType: "NoFax",
	},
	{
		value: "FaxAll",
		faxType: "FaxAll",
	},
	{
		value: "FaxPositive",
		faxType: "FaxPositive",
	},
	{
		value: "ManualFax",
		faxType: "ManualFax",
	},
];

export const ethnicity = [
	{
		value: "",
		desc: "Please Select",
	},
	{
		value: "Hispanic or Latino",
		desc: "Hispanic or Latino",
	},
	{
		value: "Not Hispanic or Latino",
		desc: "Not Hispanic or Latino",
	},
];

export const race = [
	{
		id: 1,
		value: "White",
	},
	{
		id: 2,
		value: "Black or African American",
	},
	{
		id: 3,
		value: "American Indian or Alsaka Native",
	},
	{
		id: 4,
		value: "Asian",
	},
	{
		id: 5,
		value: "Native Hawaiian or Other Pacific Islander",
	},
	{
		id: 6,
		value: "Other",
	},
];

export const symptoms = [
	{
		id: 1,
		value: "None",
	},
	{
		id: 2,
		value: "Contact with and (suspected) exposure",
	},
	{
		id: 3,
		value: "Fever or chills",
	},
	{
		id: 4,
		value: "Cough",
	},
	{
		id: 5,
		value: "Shortness of breath / difficulty breathing",
	},
	{
		id: 6,
		value: "Fatigue",
	},
	{
		id: 7,
		value: "Muscle / body aches",
	},
	{
		id: 8,
		value: "Loss of taste or smell",
	},
	{
		id: 9,
		value: "Sore throat",
	},
	{
		id: 10,
		value: "Congestion or runny nose",
	},
	{
		id: 11,
		value: "Nausea or vomiting",
	},
];

export const insuranceProvider = [
	{
		id:1,
		value: "",
		desc:"Please Select"
	},
	{
		id:2,
		value: "Self/Pay",
		desc: "Self/Pay",
	},
	{
		id: 3,
		value: "Aetna",
		desc: "Aetna",
	},
	{
		id: 4,
		value: "Anthem Blue Cross Blue Shield",
		desc: "Anthem Blue Cross Blue Shield",
	},
	{
		id: 5,
		value: "Blue Shield Of California",
		desc: "Blue Shield Of California",
	},
	{
		id: 6,
		value: "CareMore",
		desc: "CareMore",
	},
	{
		id: 7,
		value: "HealthNet",
		desc: "HealthNet",
	},
	{
		id: 8,
		value: "Humana",
		desc: "Humana",
	},
	{
		id: 9,
		value: "Inland Empire Health Plan",
		desc: "Inland Empire Health Plan",
	},
	{
		id: 10,
		value: "Kaiser Permanente",
		desc: "Kaiser Permanente",
	},
	{
		id: 11,
		value: "Medicare",
		desc: "Medicare",
	},
	{
		id: 12,
		value: "Molina Healthcare",
		desc: "Molina Healthcare",
	},
	{
		id: 13,
		value: "Oxford (UnitedHealthCare)",
		desc: "Oxford (UnitedHealthCare)",
	},
	{
		id: 14,
		value: "SAG-AFTRA Health Plan",
		desc: "SAG-AFTRA Health Plan",
	},

	{
		id: 15,
		value: "SCAN Health Plan",
		desc: "SCAN Health Plan",
	},
	{
		id: 16,
		value: "State of California (Medi-Cal)",
		desc: "State of California (Medi-Cal)",
	},
	{
		id: 17,
		value: "United Healthcare",
		desc: "United Healthcare",
	},
	{
		id: 18,
		value: "Other",
		desc: "Other",
	},
];

export const relation = [
	{
		value: "",
		desc: "Please Select",
	},
	{
		value: "Self",
		desc: "Self",
	},
	{
		value: "Spouse",
		desc: "Spouse",
	},
	{
		value: "Parent",
		desc: "Parent",
	},
	{
		value: "Child",
		desc: "Child",
	},
	{
		value: "Other Adult",
		desc: "Other Adult",
	},
	{
		value: "Adult",
		desc: "Adult",
	},
];

export const states = [
	{
		value: "",
		state: "Please Select",
	},
	{
		value: "AL",
		state: "Alabama",
	},
	{
		value: "AK",
		state: "Alsaka",
	},
	{
		value: "AZ",
		state: "Arizona",
	},
	{
		value: "AR",
		state: "Arkansas",
	},
	{
		value: "CA",
		state: "California",
	},
	{
		value: "CO",
		state: "Colorado",
	},
	{
		value: "CT",
		state: "Connecticut",
	},
	{
		value: "DE",
		state: "Delaware",
	},
	{
		value: "DC",
		state: "District Of Columbia",
	},
	{
		value: "FL",
		state: "Florida",
	},
	{
		value: "GA",
		state: "Georgia",
	},
	{
		value: "HI",
		state: "Hawaii",
	},
	{
		value: "ID",
		state: "Idaho",
	},
	{
		value: "IL",
		state: "Illinois",
	},
	{
		value: "IN",
		state: "Indiana",
	},
	{
		value: "IA",
		state: "Iowa",
	},
	{
		value: "KS",
		state: "Kansas",
	},
	{
		value: "KY",
		state: "Kentucky",
	},

	{
		value: "LA",
		state: "Louisiana",
	},
	{
		value: "ME",
		state: "Maine",
	},
	{
		value: "MD",
		state: "Maryland",
	},
	{
		value: "MA",
		state: "Massachusetts",
	},
	{
		value: "MI",
		state: "Michigan",
	},
	{
		value: "MN",
		state: "Minnesota",
	},
	{
		value: "MS",
		state: "Mississippi",
	},
	{
		value: "MO",
		state: "Missouri",
	},
	{
		value: "MT",
		state: "Montana",
	},
	{
		value: "NE",
		state: "Nebraska",
	},
	{
		value: "NV",
		state: "Nevada",
	},
	{
		value: "NH",
		state: "New Hampshire",
	},
	{
		value: "NJ",
		state: "New Jersey",
	},
	{
		value: "NM",
		state: "New Mexico",
	},
	{
		value: "NY",
		state: "New York",
	},
	{
		value: "NC",
		state: "North Carolina",
	},

	{
		value: "ND",
		state: "North Dakota",
	},
	{
		value: "OH",
		state: "Ohio",
	},

	{
		value: "OK",
		state: "Oklahoma",
	},
	{
		value: "OR",
		state: "Oregon",
	},
	{
		value: "PA",
		state: "Pennsylvania",
	},
	{
		value: "RI",
		state: "Rhode Island",
	},
	{
		value: "SC",
		state: "South Carolina",
	},
	{
		value: "SC",
		state: "South Carolina",
	},
	{
		value: "SD",
		state: "South Dakota",
	},
	{
		value: "TN",
		state: "Tennessee",
	},
	{
		value: "TX",
		state: "Texas",
	},
	{
		value: "UT",
		state: "Utah",
	},
	{
		value: "VT",
		state: "Vermont",
	},
	{
		value: "VA",
		state: "Virginia",
	},

	{
		value: "WA",
		state: "Washington",
	},
	{
		value: "WV",
		state: "West Virginia",
	},
	{
		value: "WI",
		state: "Wisconsin",
	},
	{
		value: "WY",
		state: "Wyoming",
	},
];
