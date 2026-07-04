function Experience() {
  const experience = [
    {
      role: "Java Full Stack Developer",
      company: "Self Learning",
      year: "2025 - Present",
      description:
        "Learning Java, Spring Boot, React, MySQL and building real-world projects."
    },
    {
      role: "Frontend Developer",
      company: "Personal Projects",
      year: "2024 - Present",
      description:
        "Developed responsive websites using React, Tailwind CSS and JavaScript."
    },
    {
      role: "Backend Developer",
      company: "Practice Projects",
      year: "2025",
      description:
        "Built REST APIs using Spring Boot and connected them with MySQL."
    }
  ];

  return (
    <section
      id="experience"
      className="bg-[#161B22] text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-violet-500">Experience</span>
        </h2>

        <div className="space-y-8">

          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-[#0D1117] p-8 rounded-xl border border-gray-700 hover:border-violet-500 duration-300"
            >
              <p className="text-violet-500 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.role}
              </h3>

              <h4 className="text-gray-300 mt-2">
                {item.company}
              </h4>

              <p className="text-gray-400 mt-4">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;