import { useContext, useState } from "react"
import Alert from "../components/Alert"
import AuthContext from "../context/auth"

export default function Number() {
  const [number, setNumber] = useState(0)
  const { user } = useContext(AuthContext)

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10 lg:mt-20">
        <h2 className="mb-5 font-bold text-3xl ">
          Welcome back, {user.user_metadata.full_name}
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setNumber(number + 1)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            +1
          </button>
          <button
            onClick={() => setNumber(number + 2)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            +2
          </button>
          <button
            onClick={() => setNumber(number + 3)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            +3
          </button>
          <button
            onClick={() => setNumber(number + 4)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            +4
          </button>
          <button
            onClick={() => setNumber(number + 5)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            +5
          </button>

          <button
            onClick={() => setNumber(number - 1)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            -1
          </button>
          <button
            onClick={() => setNumber(number - 2)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            -2
          </button>
          <button
            onClick={() => setNumber(number - 3)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            -3
          </button>
          <button
            onClick={() => setNumber(number - 4)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            -4
          </button>
          <button
            onClick={() => setNumber(number - 5)}
            className="bg-indigo-300 py-2 px-4 rounded text-white border border-indigo-300 hover:bg-transparent transition-all duration-300"
          >
            -5
          </button>

          <p>Your number is: {number < 0 ? <Alert /> : number}</p>
        </div>
      </section>
    </>
  )
}
