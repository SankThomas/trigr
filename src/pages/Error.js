import { NavLink } from "react-router-dom"

export default function Error() {
  return (
    <>
      <section className="flex items-center flex-col justify-center h-screen">
        <h1 className="text-4xl mb-5">Sorry, this page does not exist</h1>
        <NavLink
          to="/"
          className="py-2 px-4 rounded bg-green-500 border border-green-500 hover:bg-transparent transition-all duration-300"
        >
          Back to homepage
        </NavLink>
      </section>
    </>
  )
}
