import Button from "./Button"
import hero from "../hero.svg"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="overlay">
          <article>
            <h1 className="font-bold">
              Solve trigonometry problems on the fly
            </h1>
            <Button />
          </article>

          <article>
            <img src={hero} alt="" />
          </article>
        </div>
      </section>
    </>
  )
}
