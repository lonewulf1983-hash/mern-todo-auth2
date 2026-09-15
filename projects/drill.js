const btn = document.querySelector("#hello-btn")
const output = document.querySelector("#output")

btn.addEventListener("click", () => {
    output.innerText = "Hello Daniel"
})