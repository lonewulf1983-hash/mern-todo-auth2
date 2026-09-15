const loadBtn = document.querySelector("#load-btn")
const statusEl = document.querySelector("#status")
const postsEl = document.querySelector("#posts")

loadBtn.addEventListener("click", async () => {
    statusEl.innerText = "Loading..."
    postsEl.innerHTML = ""

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()

        statusEl.innerText = `Loaded ${data.length} posts`

        data.slice(0, 10).forEach(post => {
            const li = document.createElement("li")
            li.innerText = post.title;
            postsEl.appendChild(li)
        })
    }
    catch (err) {
    statusEl.innerText = "Error loading posts"
    }
})