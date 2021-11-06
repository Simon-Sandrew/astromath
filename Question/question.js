class Question {
    constructor(q, a, p) {
        this.q = q;
        this.a = a;
        this.p = p;
    }
    get question() {
        return this.q;
    }
    get answer() {
        return this.a;
    }
    get points() {
        return this.p;
    }
}
function determineAns(num1, num2, op) {
    if (op == "+")
        return num1 + num2;
    if(op == "-")
        return num1 - num2;
    if (op == "/")
        return num1 / num2;
    if (op == "*")
        return num1 * num2;
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
                var op_index = op[Math.round(Math.random() * 1)];
                var num1 =  Math.round((Math.random() * (MAX_VAL-MIN_VAL+1)));
                var num2 =  Math.round((Math.random() * (MAX_VAL-MIN_VAL+1)));
                var qString = "" + num1 + " " + op_index + " " + num2 + " ?";
                var aString = determineAns(num1,num2,op_index);
                const q = new Question(qString, aString, 50);
                Questions.push(q);
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