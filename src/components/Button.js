import { NavLink } from "react-router-dom"

export default function Button() {
  return (
    <>
      <div className="cta">
        <NavLink to="/get-started">
          <button className="btn">Get Started</button>
        </NavLink>
      </div>
    </>
  )
}
