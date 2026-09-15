let count = 0;

countEl = document.querySelector("#count")
const incBtn = document.querySelector("#inc")
const decBtn = document.querySelector("#dec")

incBtn.addEventListener("click", () => {
    count++;
    countEl.innerText = count;
})

decBtn.addEventListener("click", () => {
    count--
    countEl.innerText = count
})