export const isUserLoggedIn = () => {
    var token = window.localStorage.getItem('AUTH-TOKEN') ;
    return (token!=null && token.length > 0) ? true : false;
}