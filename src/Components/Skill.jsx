function Skill() {

  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MySQL"
  ];

  return (
    <section
      id="skills"
      className="bg-[#0D1117] text-white py-24 px-8"
    >

      <h2 className="text-5xl font-bold text-center mb-16">
        My <span className="text-violet-500">Skills</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-[#161B22] p-8 rounded-xl text-center hover:scale-105 duration-300 hover:border hover:border-violet-500"
          >
            <h3 className="text-2xl font-semibold">
              {skill}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skill;