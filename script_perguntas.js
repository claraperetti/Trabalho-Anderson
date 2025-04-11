let jsonQuestions = localStorage.getItem("jsonQuestions")

let parsedQuestions = JSON.parse(jsonQuestions);

class Question {
     constructor( question_id, text, responses_array, correct_answer) {
        this.question_id = question_id
        this.text = text
        this.responses_array = responses_array
        this.correct_answer = correct_answer
     }
}

jsonQuestions.array.forEach(element => {
    let question = new Question(element.idQuestion, element.text, element.response, element.correctAnswer)
    console.log(question)
});

