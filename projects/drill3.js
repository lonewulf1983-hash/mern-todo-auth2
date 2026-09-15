const inputEl = document.querySelector("#todo-input")
const addBtn = document.querySelector("#plus-btn")
const listEl = document.querySelector("#todo-list")

addBtn.addEventListener("click", () => {
    const text = inputEl.value.trim()
    if (!text) return;

    const li = document.createElement("li")
    li.innerText = text

    const delBtn = document.createElement("button")
    delBtn.innerText = "Delete"

    delBtn.addEventListener("click", () => {
        listEl.removeChild(li)
    })

    li.appendChild(delBtn)
    listEl.appendChild(li)

    inputEl.value = ""
})