export const handleError = (error) => {
    console.log(error) // 401
    if(error.status === 401){
        window.location.href = "/home";
    }
};