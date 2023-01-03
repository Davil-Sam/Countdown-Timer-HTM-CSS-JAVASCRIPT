const endDate = "1 january 2024 12:00 AM"

//First we create variable of date 
//Second we add that variable in javascript from innerHTML
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");



const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    if(diff < 0 ) return;
    // Convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    // Convert into Hrs
    inputs[1].value = Math.floor(diff/3600)%24;
    //Convert into Mins
    inputs[2].value = Math.floor(diff/60)%60;
    // Convert into sec
    inputs[3].value = Math.floor(diff%60);
}
// clock();


setInterval(() => {
    
    clock();
}, 1000);