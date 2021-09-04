import contact from "../contact.svg"

export default function ContactUs() {
  return (
    <>
      <section className="py-10 px-5">
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10">
          <article>
            <h1 className="text-4xl mb-5 mt-10 font-bold">Let's talk some</h1>
            <form method="post" className="flex flex-col">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name">What is your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />
              <label htmlFor="email">Enter your email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="textarea">I want us to talk about...</label>
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="I want us to talk about..."
                required
              ></textarea>
              <button
                type="submit"
                className="block text-left mt-5 py-2 px-6 rounded-lg shadow text-white"
              >
                Send
              </button>
            </form>
          </article>

          <article>
            <img src={contact} alt="" />
          </article>
        </div>
      </section>
    </>
  )
}
