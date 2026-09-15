import { useState } from "react"

export default function Auth({ setToken }){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signup() {
        await fetch("http://localhost:4000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        alert("Signup complete")
    
    }

    async function login() {
        const res = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        const data = await res.json();
        setToken(data.token)
        localStorage.setItem("token", data.token)
    }

    return (
        <div>
            <input placeholder="email" onChange={e => setEmail(e.target.value)} />
            <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={signup}>Signup</button>
            <button onClick={login}>Login</button>
        </div>
    )
}