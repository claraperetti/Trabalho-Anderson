class Questions {
    constructor(idQuestion, text, responses, response_answer) {
        this.idQuestion = idQuestion
        this.text = text
        this.responses = responses
        this.response_answer = response_answer
    }
}


let jsonQuestions = localStorage.getItem("jsonQuestions")

let jsonParseQuestions = JSON.parse(jsonQuestions)

let pontuacao_game = 0

let questionArray = []

let page = 0
let tituloPagina = 1

jsonParseQuestions.forEach(element => {
    questionArray.push(new Questions(element.idQuestion, element.text, element.response, element.correctAnswer))
});

window.addEventListener("DOMContentLoaded", () => {
    atualizarPagina()
})


function atualizarPagina() {
    console.log(page)
    let text_pergunta = document.querySelector(".pergunta")
    let text_alternativas = document.querySelectorAll(".alternativa")
    let titulo_pergunta = document.querySelector(".titulo")

    

    titulo_pergunta.innerHTML = "Pergunta " + tituloPagina

    let perguntaAtual = questionArray[page]

    text_pergunta.innerHTML = perguntaAtual.text
    let response_correct = perguntaAtual.response_answer


    for (let i = 0; i < text_alternativas.length; i++) {
        text_alternativas[i].innerHTML = perguntaAtual.responses[i]
    }


    text_alternativas.forEach(element => {
        element.onclick = () => {

            if(element.innerHTML == response_correct){
                pontuacao_game++
            }

            text_alternativas.forEach(e => {
                if (e.innerHTML == response_correct) {
                    e.classList.add("correct")
                } else {
                    e.classList.add("wrong")
                }
            })
            let btn_proximo = document.querySelector(".btn-proximo")
            btn_proximo.classList.add("hidden")

            btn_proximo.onclick = () => {
                page++
                tituloPagina++
                if (page < questionArray.length) {
                    btn_proximo.classList.remove("hidden")
                    text_alternativas.forEach(e => {
                        e.classList.remove("correct", "wrong")
                    })

                    atualizarPagina()
                } else {
                    localStorage.removeItem("jsonQuestions")
                    localStorage.setItem("pontuacao", pontuacao_game)
                    window.location.href= "final.html"
                }

            }
        }
    })
}



