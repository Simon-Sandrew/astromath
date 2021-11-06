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

function generateQuestions(diff) {

    var MIN_VAL;
    var MAX_VAL;

    switch(diff) {
        case 0: {
            MIN_VAL = 1;
            MAX_VAL = 100;
            var op = "+-*";
            var Questions = [];

            for(let i = 0; i < 20; i++) {
                var op_index = op[Math.random() * 3];
                var num =  (Math.random() * MAX_VAL) + MIN_VAL;

                
                Questions.push()



            }
            

        }
        break;
        
        case 1: {

        }
        break;

        case 2: {

        }
        break;

        case 3: {

        }
        break;
    }
}
