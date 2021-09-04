import { NavLink } from "react-router-dom"

export default function Button() {
  return (
    <>
      <div className="cta">
        <NavLink
          to="/get-started"
          activeClassName="activeBtn"
          className="bg-green-500 py-2 px-6 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-green-500 border border-green-500"
        >
          <button>Get Started</button>
        </NavLink>
      </div>
    </>
  )
}
