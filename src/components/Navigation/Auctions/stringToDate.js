const now = new Date();

export function toDate(date){
    return  date.toLocaleDateString('en-CA',{
        year:'numeric', 
        month:'2-digit',
        day: '2-digit',
    });
}