let text_pontuacao = document.querySelector(".pontuacao")

let pontuacao_jogador = localStorage.getItem("pontuacao")

let btn_inicio = document.getElementById("btn-inicio")

let btn_jogar_denovo = document.getElementById("btn-jogar-denovo")

let tema = localStorage.getItem("tema")

let url = "https://backend-quiz-production.up.railway.app/quiz/category/" + tema

fetch(url, {
    method: "DELETE"
})

localStorage.removeItem("tema")

text_pontuacao.innerHTML = pontuacao_jogador + "/10"

btn_inicio.onclick = () => {
    window.location.href = "inicio.html"
    localStorage.removeItem("pontuacao")
}

btn_jogar_denovo.onclick = () => {
    window.location.href = "tema.html"
    localStorage.removeItem("pontuacao")
}


