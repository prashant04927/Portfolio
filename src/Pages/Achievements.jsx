function Achievements() {
  const achievements = [
    {
      title: "Java Full Stack Journey",
      detail: "Learning Java, Spring Boot, React and MySQL."
    },
    {
      title: "Projects Completed",
      detail: "Built 10+ practice projects using React and Java."
    },
    {
      title: "Certificates",
      detail: "Completed courses from Cisco, Unstop and other platforms."
    }
  ];

  return (
    <section
      id="achievements"
      className="bg-[#0D1117] text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          My <span className="text-violet-500">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#161B22] p-8 rounded-xl border border-gray-700 hover:border-violet-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.detail}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;
