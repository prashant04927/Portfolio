function Certificate() {

  const certificates = [
    {
      title: "Java Full Stack",
      company: "Cisco Networking Academy"
    },
    {
      title: "React Development",
      company: "Unstop"
    },
    {
      title: "Web Development",
      company: "LinkedIn Learning"
    },
    {
      title: "Java Programming",
      company: "Infosys Springboard"
    },
    {
      title: "SQL & Database",
      company: "Oracle Academy"
    },
    {
      title: "Frontend Development",
      company: "Coursera"
    }
  ];

  return (
    <section
      id="certificate"
      className="bg-[#0D1117] text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-violet-500">Certificates</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((item,index)=>(
            <div
              key={index}
              className="bg-[#161B22] rounded-xl p-8 border border-gray-700 hover:border-violet-500 hover:scale-105 duration-300"
            >

              <div className="text-5xl mb-5">
                🏆
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.company}
              </p>

              <button className="mt-6 bg-violet-600 px-5 py-2 rounded-lg hover:bg-violet-700">
                View Certificate
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificate;