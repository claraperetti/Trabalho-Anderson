window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isPageAguarde") === "true")
    setTimeout(() => {
      const url = "https://backend-quiz-production.up.railway.app/quiz/"
      let url_get_category = url + 1

      fetch(url_get_category)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("jsonQuestions", JSON.stringify(data))
          window.location.href = "pergunta.html"
        })
    }, 8000)
  })