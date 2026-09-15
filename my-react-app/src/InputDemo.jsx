import { useState } from "react"

export default function InputDemo() {
    const [text, setText] = useState("")


    return (
        <div style={{ padding: "20px" }}>
            <input 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something"
              />

              <p>You typed: {text}</p>
        </div>
    )
}