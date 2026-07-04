function Contact() {

  return (
    <section id="contact" className="bg-[#0D1117] text-white py-24 px-8">

      <h2 className="text-5xl font-bold text-center mb-14">
        Contact <span className="text-violet-500">Me</span>
      </h2>

      <form className="max-w-3xl mx-auto space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-[#161B22] outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-[#161B22] outline-none"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-[#161B22] outline-none"
        ></textarea>

        <button className="bg-violet-600 px-8 py-3 rounded-lg hover:bg-violet-700">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;