export const isUserLoggedIn = () => {
    var token = window.localStorage.getItem('AUTH-TOKEN') ;
    return (token!=null && token.length > 0) ? true : false;
}

export const getUserAuthToken = ()=>{
    return window.localStorage.getItem('AUTH-TOKEN');
}

export const getPatientAuthToken = ()=>{
    return window.localStorage.getItem('PATIENT-AUTH-TOKEN');
}