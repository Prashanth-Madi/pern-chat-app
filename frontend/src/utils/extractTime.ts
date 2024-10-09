

const extractTime = (dateString:string|undefined) => {
    if(!dateString) return
    const date=new Date(dateString);
    const hours=padZero(date.getHours());
    const minutes=padZero(date.getMinutes());
    return `${hours}:${minutes}`
  
}
function padZero(number:number){
    return number.toString().padStart(2,"0");
}

export default extractTime
