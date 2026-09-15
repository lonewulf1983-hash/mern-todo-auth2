import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [status, setStatus] = useState("Idle")

    useEffect(() => {
        async function load() {
            setStatus("Loading...")

            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await res.json()

                setPosts(data.slice(0, 10))
                setStatus(`Loaded ${data.length} posts`);

            } catch (err) {
                setStatus("Error loading posts")
            }
        }

        load()
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <p>{status}</p>

            <ul>
                {posts.map((p) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    )
}