const valueEl = document.querySelector("#value")
const incBtn = document.querySelector("#increment")
const decBtn = document.querySelector("#decrement")

let count = 0;

incBtn.addEventListener("click", () => {
    count = count + 1;
    valueEl.innerText = count;
})

decBtn.addEventListener("click", () => {
    count = count - 1;
    valueEl.innerText = count
})