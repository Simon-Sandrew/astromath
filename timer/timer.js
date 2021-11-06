const startingMinutes = 1;
let totalSeconds = startingMinutes * 60;
const timerElem = document.getElementById("timer");
const resultElem = document.getElementById("sellout");
setInterval(updateTimer, 1000);
function getInput(){
    resultElem.innerHTML="wow a button";
}
function updateTimer(){
    const minutes=Math.floor(totalSeconds/60);
    let seconds=totalSeconds%60;
    seconds = seconds < 10 ? '0' +seconds: seconds;
    timerElem.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--;
    totalSeconds=totalSeconds<0?0:totalSeconds;
}
