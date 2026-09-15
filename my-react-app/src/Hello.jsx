import { useEffect, useState } from "react"

export default function Hello() {
    const [msg, setMsg] = useState("Loading...")

    useEffect(() => {
        async function load() {
            const res = await fetch("http://localhost:4000/hello")
            const data = await res.json()
            setMsg(data.message)
        }
        load()
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <h2>{msg}</h2>
        </div>
    )
}