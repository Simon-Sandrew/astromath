let totalSeconds = 120;
var init = 120.0;
var points=0;
const uiElem = document.getElementById("ui");
const timerElem = document.getElementById("timer");
const questElem = document.getElementById("question");
const levelElem = document.getElementById("levelup");
var level=0;
var questions = generateQuestions(level, 5);
var finished = false;
const resultElem = document.getElementById("result");
const inputElem = document.getElementById("input");
const scoreElem = document.getElementById("score");
const postElem = document.getElementById("postgame");
var timer = setInterval(updateTimer, 1000);
var counter=0;
questElem.innerHTML=questions[counter].q;
function levelUp(){
    levelElem.innerHTML="Level Up!";
}
function getInput(){
    if (!finished) {
    levelElem.innerHTML="";
    if(uiElem.value==questions[counter].a){
        var difference = init-Math.round(totalSeconds);
        var point=2.0-difference/100;
        var points_=point*questions[counter].p;
        points+=points_;
        resultElem.innerHTML="correct!";
        scoreElem.innerHTML="Points: "+points;
        counter++;
        if(counter<5){
            questElem.innerHTML=questions[counter].q;
        }
        else{
            levelUp();
            counter=0;
            if(level<8){
                level++;
                questions = generateQuestions(level, 5);
                questElem.innerHTML=questions[counter].q;
                totalSeconds+=30;
            }
            else {
                finished = true;
            }
        }
    }
    else{
        resultElem.innerHTML="incorrect!";
    }
    uiElem.value='';
}
if (finished) {
    //username
    var userID = uiElem.value;
    if (userID == "")
      userID="ANON";
    let rurl = ' https://fa97-2620-0-2820-2000-5071-4154-332b-dbac.ngrok.io' + userID + '/' + points;
      $.ajax({
          type: "GET",
          url: rurl,
          success: function(){
            window.location.replace("https://astromath.tech/leaderboard.html");
          }
      });
}
}
function updateTimer(){
    if(!finished){
    const minutes=Math.floor(totalSeconds/60);
    let seconds=totalSeconds% 60;
    seconds = seconds < 10 ? '0' +seconds: seconds;
    timerElem.innerHTML = `${minutes}:${seconds}`;
    totalSeconds--;
    totalSeconds=totalSeconds<0?0:totalSeconds;
    if(totalSeconds==0){
        timerElem.innerHTML = `0:00`;
        questElem.innerHTML="Enter your username to save your score:";
        timerElem.innerHTML="";
        scoreElem.innerHTML="Final Score: "+points;
        finished = true;
        clearInterval(timer);
    }
}
}
uiElem.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        getInput();
    }
});

