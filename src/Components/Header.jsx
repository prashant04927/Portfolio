function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D1117]/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold text-violet-500">
          Prashant singh
        </h1>

        <ul className="flex gap-8 text-white font-medium">
          <li><a href="#home" className="hover:text-violet-500">Home</a></li>
          <li><a href="#about" className="hover:text-violet-500">About</a></li>
          <li><a href="#skills" className="hover:text-violet-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-violet-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-violet-500">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;