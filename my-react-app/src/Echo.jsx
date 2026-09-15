import { useState } from "react"

export default function Echo() {
    const [text, setText] = useState("")
    const [result, setResult] = useState("")

    async function send() {
        const res = await fetch("http://localhost:4000/echo", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ text })
        })

        const data = await res.json()
        setResult(data.received)
    }

    return (
        <div style={{ padding: "20px" }}>
            <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Say something"
            />
            <button onClick={send}>Send</button>

            <p>Backend says: {result}</p>
        </div>
    )
}