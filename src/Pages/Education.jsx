function Education() {
  const education = [
    {
      year: "2023 - Present",
      degree: "B.Tech in Computer Science",
      college: "Shri Ramswaroop memorial college engineering and Managment",
      desc: "Currently pursuing B.Tech with focus on Java Full Stack Development."
    },
    {
      year: "2022",
      degree: "12th (UP Board)",
      college: "Pioneer Montessori Inter College",
      desc: "Completed Higher Secondary Education."
    },
    {
      year: "2020",
      degree: "10th (UP Board)",
      college: "Pioneer Montessori Inter College",
      desc: "Completed Secondary Education."
    }
  ];

  return (
    <section
      id="education"
      className="bg-[#161B22] text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-violet-500">Education</span>
        </h2>

        <div className="space-y-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#0D1117] p-8 rounded-xl border border-gray-700 hover:border-violet-500 duration-300"
            >
              <span className="text-violet-500 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.degree}
              </h3>

              <h4 className="text-gray-300 mt-2">
                {item.college}
              </h4>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;