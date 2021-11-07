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

class Term  { 
    constructor(constant,pow) {
        this.c = constant;
        this.p = pow;
    }
    get constant() {
        return this.c;
    }
    get pow() {
        return this.p;
    }
    /**
     * @param {number} val
     */
    set setConstant(val) {
        this.c = val;
    }
    /**
     * @param {number} val
     */
    set setPow(val) {
        this.p = val;
    }
    isZero() {
        return (this.c == 0);
    }
    derivative() {
        this.setConstant = (this.c * this.p);
        this.setPow = (this.p-1);
        return;
    }
    print() {
        if (this.p == 0)
            return this.c;
        var str = "";
        if (this.c > 1)
            str += this.c;
        if (this.p > 1)
            str += "x^" + this.p;
        else if (this.p == 1)
            str += "x";
        return str;
    }
}

class Equation {
    constructor(term1,term2,term3) {
        this.term1 = term1;
        this.term2 = term2;
        this.term3 = term3;
    }
    derivative() {
        this.term1.derivative();
        this.term2.derivative();
        this.term3.derivative();
    }
    print() {
        var str = "";
        if (!this.term1.isZero())
            str += this.term1.print();
        if (!this.term2.isZero()) 
            str += " + " + this.term2.print();
        if (!this.term3.isZero())
            str += " + " + this.term3.print();
        return str;
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
function determineProb(num1, num2, div, op) {
    if (op == "ratio")
        return (num1 * num2) / div;
    if (op == "area")
        return Math.sqrt(num1) * 4;
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
                var num1 =  Math.round(Math.random() * (MAX_VAL-MIN_VAL+1));
                var num2 =  Math.round(Math.random() * (MAX_VAL-MIN_VAL+1));
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
                var num1 =  Math.round(Math.random() * (MAX_VAL-MIN_VAL+1) + 1);
                var num2 =  Math.round(Math.random() * (div)) + 2;
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
            if (diff == 5)
                MAX_VAL = 100;
            var problem = ["ratio", "algebra", "area"];
            
            for (let i = 0; i < size; i++) {
                var problem_index = problem[Math.round(Math.random() * 2)];
                switch(problem_index) {
                    case "ratio":
                        do {
                        var num1 =  Math.round(Math.random() * (MAX_VAL-MIN_VAL+1))+1;
                        var num2 =  Math.round(Math.random() * (MAX_VAL-MIN_VAL+1))+1;
                        var div = Math.round(Math.random() * 10) + 1;
                        } while (determineProb(num1,num2,div,problem_index) != Math.round(determineProb(num1,num2,div,problem_index)));
                        var genQ = "( x / " + num1 + " ) = ( " + num2 + " / " + div + " )";
                        var genS = determineProb(num1,num2,div,"ratio");
                        const q = new Question(genQ,genS,200);
                        Questions.push(q);
                        break;
                    case "algebra":
                        const term1 = new Term(Math.round(Math.random() * 3)+1,Math.round(Math.random() * 5)+3);
                        const term2 = new Term(Math.round(Math.random() * 3)+1,Math.round(Math.random() * 3)+2);
                        const term3 = new Term(Math.round(Math.random() * 3),1);
                        const eqn = new Equation(term1,term2,term3);
                        var genQ = "Derive: " + eqn.print();
                        eqn.derivative();
                        var genS = eqn.print();
                        const alg = new Question(genQ,genS,300);
                        Questions.push(alg);
                        break;
                    case "area": 
                        do {
                            var area =  Math.round(Math.random() * (MAX_VAL*100-MIN_VAL+1))+1;
                        } while (determineProb(area,0,0,problem_index) != Math.round(determineProb(area,0,0,problem_index)));
                        var genQ = "Find the perimeter of a square with area " + area;
                        var genS = determineProb(area,0,0,problem_index);
                        const a = new Question(genQ,genS,250);
                        Questions.push(a);
                        break;
                }
            }
            
            
        }
        break;
        
        case 6:
        case 7: {

        }
        break;

        case 8: {

        }
        break;
    }

    return Questions;
}
