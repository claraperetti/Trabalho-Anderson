let btn = document.getElementById("btn-tema");
let input = document.getElementById("input-categoria")

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let url_post_category = "https://backend-quiz-production.up.railway.app/quiz/category";

  fetch(url_post_category, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": input.value
    }
    )
  }).then(
    setTimeout(() => {
      localStorage.setItem("isPageAguarde", "true")
      window.location.href = "aguarde.html"
    }, 1000)
  )
})
