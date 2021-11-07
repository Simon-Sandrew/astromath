let totalSeconds = 60;
const timerElem = document.getElementById("timer");
const questElem = document.getElementById("question");
var level=0;
var questions = generateQuestions(level, 5);
const resultElem = document.getElementById("sellout");
const inputElem = document.getElementById("answer");
setInterval(updateTimer, 1000);
var counter=0;
questElem.innerHTML=questions[counter].q;
function getInput(){
    resultElem.innerHTML="wow a button";
    if(inputElem.value==questions[counter].a){
        counter++;
        resultElem.innerHTML="correct!";
        if(counter<5){
            questElem.innerHTML=questions[counter].q;
        }
        else{
            counter=0;
            if(level<9){
                level++;
                questions = generateQuestions(level, 5);
                questElem.innerHTML=questions[counter].q;
                totalSeconds+=30;
            }
            else{
                questElem.innerHTML="u win uwu! rawr";
            }
        }
    }
    else{
        resultElem.innerHTML="incorrect!";
    }
    inputElem.value='';
}
function updateTimer(){
    const minutes=Math.floor(totalSeconds/60);
    let seconds=totalSeconds%60;
    seconds = seconds < 10 ? '0' +seconds: seconds;
    timerElem.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--;
    totalSeconds=totalSeconds<0?0:totalSeconds;
    if(totalSeconds==0){
        questElem.innerHTML="You may have given up on math, but we'll never let you down...";    
        setInterval(window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 4000);
    }
}
