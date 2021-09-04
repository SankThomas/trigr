import about from "../about.svg"

export default function AboutUs() {
  return (
    <>
      <section className="py-10 px-5 md:mt-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:items-center lg:gap-10">
          <article>
            <img src={about} alt="" />
          </article>

          <article>
            <h1 className="font-bold text-4xl mb-5 mt-10 md:mt-0">
              Why does Trigr exist?
            </h1>
            <p>
              Now led tedious shy lasting females off. Dashwood marianne in of
              entrance be on wondered possible building. Wondered sociable he
              carriage in speedily margaret. Up devonshire of he thoroughly
              insensible alteration. An mr settling occasion insisted distance
              ladyship so.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
