import { useContext } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
// import GetStarted from "./pages/GetStarted"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Error from "./pages/Error"
import Number from "./pages/Number"
import AuthContext from "./context/auth"

function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      {/* <main className="wrapper">
      <Header />
      <Hero />
      <GetStarted />
    </main> */}
      <main className="wrapper">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          {user && (
            <Route path="/dashboard">
              <Number />
            </Route>
          )}
          {/* <Route path="/get-started">
            <GetStarted />
          </Route> */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
