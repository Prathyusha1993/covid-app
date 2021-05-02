export const isUserLoggedIn = () => {
    var token = window.localStorage.getItem('AUTH-TOKEN');
    return (token != null && token.length > 0) ? true : false;
}

export const getUserAuthToken = () => {
    return window.localStorage.getItem('AUTH-TOKEN');
}

export const getPatientAuthToken = () => {
    return window.localStorage.getItem('PATIENT-AUTH-TOKEN');
}

export const phoneNumberFormatter = (value, previousValue) => {
    // return nothing if no value
    if (!value) return value;

    // only allows 0-9 inputs
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {

        // returns: "x", "xx", "xxx"
        if (cvLength < 4) return currentValue;

        // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
        if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;

        // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
};