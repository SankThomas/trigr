import hero from "../hero.svg"
import { FcGoogle } from "react-icons/fc"

export default function GetStarted() {
  return (
    <>
      <section className="p-5 lg:grid grid-cols-2 mt-10 rounded shadow lg:p-0">
        <article className="get__started py-10 rounded-t lg:rounded-l lg:p-10">
          <img
            src={hero}
            alt="hero"
            title="Hero"
            className="w-9/12 mx-auto lg:w-full"
          />
        </article>

        <article className="bg-white p-5 rounded-b lg:rounded-r lg:px-10">
          <form
            autoComplete="off"
            className="flex justify-center flex-col lg:mt-20"
          >
            <label htmlFor="username" className="text-gray-900 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Choose a username"
              autoComplete="off"
              required
              className="mb-5 py-2 text-green-500 tracking-wide placeholder-green-500 border-b-2 border-gray-900"
            />
            <label htmlFor="email" className="text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address..."
              autoComplete="off"
              required
              className="mb-5 py-2 text-green-500 tracking-wide placeholder-green-500 border-b-2 border-gray-900"
            />
            <label htmlFor="password" className="text-gray-900 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Choose a password"
              autoComplete="off"
              required
              className="mb-5 py-2 text-green-500 tracking-wide placeholder-green-500 border-b-2 border-gray-900"
            />
            <div className="cta">
              <button className="btn" type="Submit">
                Log In
              </button>
            </div>
          </form>

          <div className="mt-10">
            <p className="text-gray-900 flex items-center">
              Log In with: <FcGoogle className="text-4xl ml-10" />
            </p>
          </div>
        </article>
      </section>
    </>
  )
}
