import { useState } from "react"
import Auth from "./Auth"
import TodosMongo from "./TodosMongo";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  function logout() {
    localStorage.removeItem("token")
    setToken(null)
  }

  if (!token) return <Auth setToken={setToken} />


 return (
  <div>
    <button onClick={logout}>Logout</button>
   <TodosMongo />
  </div>
 )
}

export default App