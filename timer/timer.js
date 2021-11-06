const startingMinutes = 10;
let totalSeconds = startingMinutes * 60;

const timerElem = document.getElementById('timer');

setInterval(updateTimer, 1000);

function updateTimer(){
    const minutes=Math.floor(totalSeconds/60);
    let seconds=totalSeconds%60;
    seconds = seconds < 10 ? '0' +seconds : seconds;
    timerElem.innerHTML = `${minutes}: ${seconds}`;
    totalSeconds--;
}