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
function roundOdd(num1) {
    if (num % 2 != 0)
        return num + 1;
    else
        return num;
}

function generateQuestions(diff, size) {

    var MIN_VAL = 1;
    var MAX_VAL = 10;
    var Questions = [];
    var op;

    switch(diff) {
        case 0:
        case 1: {
            op = "+-";
            if (diff == 1)
                MAX_VAL = 100;

            for(let i = 0; i < size; i++) {
                var op_index = op[Math.round(Math.random() * 1)];
                var num1 =  Math.round((Math.random() * (MAX_VAL-MIN_VAL+1)));
                var num2 =  Math.round((Math.random() * (MAX_VAL-MIN_VAL+1)));
                var genQ = "" + num1 + " " + op_index + " " + num2 + " ?";
                var genA = determineAns(num1,num2,op_index);
                const q = new Question(genQ, genA, 50);
                Questions.push(q);
            } 
        }
        break;
        
        case 2:
        case 3: {
            op = "*/";
            var div = Math.round(Math.random() * 10) + 1;
            if (diff == 3) 
                MAX_VAL = 100;

            for(let i = 0; i < size; i++) {
                var op_index = op[Math.round(Math.random() * 1)];
                do {
                var num1 =  Math.round((Math.random() * (MAX_VAL-MIN_VAL+1)) + 1);
                var num2 =  Math.round((Math.random() * (div))) + 2;
                } while (determineAns(num1,num2,op_index) != Math.round(determineAns(num1,num2,op_index)));
                var genQ = "" + num1 + " " + op_index + " " + num2 + " ?";
                var genS = determineAns(num1,num2,op_index);
                const q = new Question(genQ, genS, 100);
                Questions.push(q);
            } 

        }
        break;

        case 4:
        case 5: {



        }
        break;
    }

    return Questions;
}