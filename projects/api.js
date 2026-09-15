const loadBtn = document.querySelector("#load-btn")
const statusEl = document.querySelector("#status")
const postsEl = document.querySelector("#posts")

async function loadPosts() {
    statusEl.innerText = "Loading...";
    postsEl.innerHTML = ""

    try {
        const res = await fetch("https://jsonplacerholder.typicode.com/posts")

        if(!res.ok) {
            throw new Error("Network error")
        }

        const data = await res.json()

        statusEl.innerText = `Loaded ${data.length} posts`;

        data.slice(0, 10).forEach(post => {
            const li = document.createElement("li")
            li.innerText = post.title;
            postsEl.appendChild(li)
        })
    } catch (err) {
        statusEl.innerText = "Error loading posts"
        console.error(err)
    }
}

loadBtn.addEventListener("click", loadPosts)