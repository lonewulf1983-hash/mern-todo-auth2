const form = document.querySelector("#login-form")
const userEl = document.querySelector("#username")
const passEl = document.querySelector("#password")
const resultEl = document.querySelector("#result")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = userEl.value.trim()
    const pass = passEl.value.trim()

    resultEl.innerText = `User: ${user}, Pass length: ${pass.length}`

    userEl.value = ""
    passEl.value = ""
})