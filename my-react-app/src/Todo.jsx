import { useEffect, useState }  from "react"

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState("")

    async function load() {
        const res = await fetch("http://localhost:4000/todos")
        const data = await res.json()
        setTodos(data)
    }

    async function addTodo() {
        const res = await fetch("http://localhost:4000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        })

        const newTodo = await res.json();
        setTodos([...todos, newTodo])
        setText("")
    }

    async function deleteTodo(id) {
        await fetch(`http://localhost:4000/todos/${id}`, {
            method: "DELETE"
        })

    setTodos(todos.filter(t => t.id !== id))
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="New todo"
            />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map(t => (
                    <li key={t.id}>
                        {t.text}
                        <button onClick={() => deleteTodo(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}