import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Project() {

  const projects = [
    {
      image: project1,
      title: "AI Chat App",
      desc: "AI Chatbot using React and Gemini API."
    },
    {
      image: project2,
      title: "Portfolio Website",
      desc: "Personal portfolio using React and Tailwind CSS."
    },
    {
      image: project3,
      title: "Todo App",
      desc: "Task management application with React."
    }
  ];

  return (
    <section id="projects" className="bg-[#161B22] py-20 px-8 text-white">

      <h2 className="text-5xl font-bold text-center mb-12">
        My <span className="text-violet-500">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-[#0D1117] rounded-xl overflow-hidden hover:scale-105 duration-300"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>

              <button className="mt-5 bg-violet-600 px-5 py-2 rounded-lg hover:bg-violet-700">
                View Project
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Project;