let milli = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer = false;

function strt(){
    timer = true;
    myFun();
}
function stop(){
    timer = false;
    myFun();
}
function reset(){
        milli = 0;
        sec = 0;
        min = 0;
        hour = 0;
        timer = false;
        
        document.getElementById("milli").textContent = milli.toString().padStart(2, "0");
        document.getElementById("sec").textContent = sec.toString().padStart(2, "0");
        document.getElementById("min").textContent = min.toString().padStart(2, "0");
        document.getElementById("hour").textContent = hour.toString().padStart(2, "0");
}
function myFun(){
    if(timer === true){
        milli+=1;
        if(milli == 100){
            sec+=1;
            milli = 0;
        }
        if(sec==60){
            min+=1;
            sec=0;
        }
        if(min==60){
            hour+=1;
            min=0;
        }
        if(hour==12){
            hour = 0;
        }
        setTimeout(myFun, 10);

        document.getElementById("milli").textContent = milli.toString().padStart(2, "0");
        document.getElementById("sec").textContent = sec.toString().padStart(2, "0");
        document.getElementById("min").textContent = min.toString().padStart(2, "0");
        document.getElementById("hour").textContent = hour.toString().padStart(2, "0");
    }
}