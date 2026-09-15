const inputEl = document.querySelector("#todo-input");
const addBtn = document.querySelector("#big-btn");
const listEl = document.querySelector("#todo-list")

addBtn.addEventListener("click", () => {
    const text = inputEl.value.trim()
    if (!text) return;

    const li = document.createElement("li")
    li.innerText = text

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"

    deleteBtn.addEventListener("click", () => {
        listEl.removeChild(li)
    })

    li.appendChild(deleteBtn)
    listEl.appendChild(li)

    inputEl.value = ""
})