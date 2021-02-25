export const parseDate = (dateString) => {
    //expected input format yyyyMMdd or yyyyMMddhhmmss
    //ouput - Mon dd yyyy
    var year =dateString.substring(0,4);
    var month = dateString.substring(4,6);
    var day = dateString.substring(6,8);
    
    var d = new Date(year + "/" + month + "/" + day);
    return d.toDateString().substring(3);
}