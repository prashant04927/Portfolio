function Services() {

  const services = [
    {
      title: "Frontend Development",
      desc: "Creating responsive websites using React, HTML, CSS and Tailwind CSS."
    },
    {
      title: "Backend Development",
      desc: "Developing REST APIs using Java, Spring Boot and MySQL."
    },
    {
      title: "UI Design",
      desc: "Building clean and user-friendly interfaces for web applications."
    }
  ];

  return (
    <section
      id="services"
      className="bg-[#161B22] text-white py-24 px-8"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-violet-500">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0D1117] rounded-xl p-8 border border-gray-700 hover:border-violet-500 duration-300"
            >

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;