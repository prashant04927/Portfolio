function About() {
  return (
    <section
      id="about"
      className="bg-[#161B22] text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          About <span className="text-violet-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <img
              src="https://i.pravatar.cc/400"
              alt="about"
              className="rounded-2xl w-80 shadow-lg"
            />
          </div>

          <div>

            <h3 className="text-3xl font-bold mb-5">
              Java Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-8">
              I am a passionate Java Full Stack Developer with strong
              knowledge of Java, Spring Boot, React JS, HTML, CSS,
              JavaScript and MySQL. I enjoy building modern,
              responsive and user-friendly web applications.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#0D1117] p-6 rounded-xl">
                <h4 className="text-violet-500 font-bold text-xl">
                  Experience
                </h4>
                <p className="text-gray-400 mt-2">
                  Fresher
                </p>
              </div>

              <div className="bg-[#0D1117] p-6 rounded-xl">
                <h4 className="text-violet-500 font-bold text-xl">
                  Projects
                </h4>
                <p className="text-gray-400 mt-2">
                  10+ Completed
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;