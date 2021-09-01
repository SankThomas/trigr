import { NavLink } from "react-router-dom"
import Button from "./Button"

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2 className="font-bold text-2xl lg:text-4xl">
            <NavLink to="/">Trigr</NavLink>
          </h2>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Let's talk</NavLink>
            </li>
          </ul>
        </nav>

        <Button />
      </header>
    </>
  )
}
