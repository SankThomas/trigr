import { useContext } from "react"
import { NavLink } from "react-router-dom"
import AuthContext from "../context/auth"

export default function Button() {
  const { login, logout } = useContext(AuthContext)

  return (
    <>
      <div className="cta">
        <button
          className="bg-green-500 py-2 px-6 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-green-500 border border-green-500"
          onClick={login}
        >
          Log In
        </button>
      </div>
    </>
  )
}
