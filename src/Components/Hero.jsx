import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import resume from "../assets/resume.pdf";
function Hero() {
  
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0D1117] text-white flex items-center justify-center px-8 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h3 className="text-2xl text-gray-300 mb-2">
            Hello, I'm
          </h3>

          <h1 className="text-6xl font-bold mb-4">
            Prashant <span className="text-violet-500">Singh</span>
          </h1>

          <h2 className="text-3xl font-semibold text-gray-300 mb-6">
            Java Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            Passionate Full Stack Developer with experience in Java,
            Spring Boot, React, HTML, CSS, JavaScript and MySQL.
            I love creating beautiful and responsive web applications.
          </p>
          <p className="mt-8 text-gray-400">
           📍 India <br />
             📧 Prashantsingh04927@gmail.comm
             </p>
          

          <div className="flex gap-5">
            <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg font-semibold">
              Hire Me
            </button>

            <a href={resume} download className="bg-violet-600 px-6 py-3 rounded-lg hover:bg-violet-700">Download Resume</a>
          </div>
        </div>
        <div className="flex gap-5 mt-8 text-3xl">
  <a href="https://github.com/yourusername" target="_blank">
    <FaGithub className="hover:text-violet-500 duration-300" />
  </a>

  <a href="https://linkedin.com/in/yourusername" target="_blank">
    <FaLinkedin className="hover:text-blue-500 duration-300" />
  </a>

  <a href="https://instagram.com/yourusername" target="_blank">
    <FaInstagram className="hover:text-pink-500 duration-300" />
  </a>
</div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-80 h-80 rounded-full border-4 border-violet-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;