export const handleError = (error) => {
    console.log(error) 
    if(error.status === 401){
        window.location.href = "/home";
    }
};