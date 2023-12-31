const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock,1000);
function runClock(){
    const time=new Date();
    const sec=time.getSeconds()/60;
    const min= (sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;
    console.log(hrs,min,sec);
    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360);
   
}
runClock();

const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const d = new Date();
let name1 = month[d.getMonth()];
document.getElementById("demo").innerHTML = name1;

const F = new Date();
let day = F.getUTCDate();
document.getElementById("demo1").innerHTML = day;