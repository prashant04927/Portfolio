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
        href="https://www.linkedin.com/in/prashant-singh-605b54379?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        className="text-3xl hover:text-blue-500 duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.instagram.com/prashant_singh_091?igsh=MTVjYWtncmZ4MG8xMw=="
        target="_blank"
        className="text-3xl hover:text-pink-500 duration-300"
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default Social;