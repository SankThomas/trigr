import Button from "./Button"

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>Trigr</h2>
        </div>

        <nav>
          <ul>
            <li>About Us</li>
            <li>Let's talk</li>
          </ul>
        </nav>

        <Button />
      </header>
    </>
  )
}
