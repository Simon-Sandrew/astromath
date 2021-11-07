let totalSeconds = 120;
const timerElem = document.getElementById("timer");
const questElem = document.getElementById("question");
const levelElem = document.getElementById("levelup");
var level=0;
var questions = generateQuestions(level, 5);
var finished = false;
const resultElem = document.getElementById("result");
const inputElem = document.getElementById("answer");
setInterval(updateTimer, 1000);
var counter=0;
questElem.innerHTML=questions[counter].q;

function levelUp(){
    levelElem.innerHTML="Level Up!";
}

function getInput(){
    levelElem.innerHTML="";
    if(inputElem.value==questions[counter].a){
        counter++;
        resultElem.innerHTML="correct!";
        if(counter<5){
            questElem.innerHTML=questions[counter].q;
        }
        else{
            levelUp();
            counter=0;
            if(level<5){
                level++;
                questions = generateQuestions(level, 5);
                questElem.innerHTML=questions[counter].q;
                totalSeconds+=30;
            }
            else{
                questElem.innerHTML="u win uwu! rawr";
                finished=true;
            }
        }
    }
    else{
        resultElem.innerHTML="incorrect!";
    }
    inputElem.value='';
}
function updateTimer(){
    if(!finished){
    const minutes=Math.floor(totalSeconds/60);
    let seconds=totalSeconds%60;
    seconds = seconds < 10 ? '0' +seconds: seconds;
    timerElem.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--;
    totalSeconds=totalSeconds<0?0:totalSeconds;
    if(totalSeconds==0){
        setInterval(questElem.innerHTML="You may have given up on math, but we'll never let you down...", 4000);
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
}
}