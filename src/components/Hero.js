import { useContext } from "react"
import AuthContext from "../context/auth"
import hero from "../hero.svg"

export default function Hero() {
  const { login } = useContext(AuthContext)

  return (
    <>
      <section className="hero">
        <div className="overlay">
          <article>
            <h1 className="font-bold">
              Solve trigonometry problems on the fly
            </h1>
            <button
              className="bg-green-500 py-2 px-6 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-green-500 border border-green-500"
              onClick={login}
            >
              Get Started
            </button>
          </article>

          <article>
            <img src={hero} alt="" />
          </article>
        </div>
      </section>
    </>
  )
}
