import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div className="flex justify-center gap-5 py-10 bg-[#0D1117]">

      <a
        href="https://github.com/"
        target="_blank"
        className="text-3xl hover:text-violet-500 duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        className="text-3xl hover:text-blue-500 duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://instagram.com/"
        target="_blank"
        className="text-3xl hover:text-pink-500 duration-300"
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default Social;