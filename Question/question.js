import mathjs from 'https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.0.0/math.js'
class Question {
    construtor(question, answer, points) {
        this.points = points;
        this.question = question;
        this.answer = answer;
    }
    getQuestion() {
        return this.question;
    }
    getAnswer() {
        return this.answer;
    }
    getPoints() {
        return this.points;
    }
}
function determineAns(num1, num2, op) {
    if (op == "+")
        return num1 + num2;
    if(op == "-")
        return num1 - num2;
}

function generateQuestions(diff) {

    var MIN_VAL = 1;
    var MAX_VAL = 100;
    var Questions = [];
    var op;

    switch(diff) {
        case 0: {
            op = "+-";

            for(let i = 0; i < 20; i++) {
                var op_index = op[Math.random() * 2];
                var num1 =  (Math.random() * MAX_VAL) + MIN_VAL;
                var num2 =  (Math.random() * MAX_VAL) + MIN_VAL;
                var qString = "" + num1 + " " + op_index + " " + num2 + " ?";
                var aString = determineAns(num1,num2,op);
                Questions.push(qString,aString,5);
            } 
        }
        break;
        
        case 1: {
            op = "*/";
        }
        break;

        case 2: {

        }
        break;

        case 3: {

        }
        break;
    }

    return Questions;
}
