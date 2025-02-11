function updateClock(){
    const now = new Date();
    let hour = now.getHours();
    const meridiam = hour>=12?"PM":"AM";
    hour = hour%12||12;
    hour = hour.toString().padStart(2,"0");
    let min = now.getMinutes().toString().padStart(2,"0");
    let sec = now.getSeconds().toString().padStart(2,"0");
    let time = `${hour}:${min}:${sec} ${meridiam}`;
    document.getElementById("contnt").textContent = time;
}
updateClock();
setInterval(updateClock, 1000);
