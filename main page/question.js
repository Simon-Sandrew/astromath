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