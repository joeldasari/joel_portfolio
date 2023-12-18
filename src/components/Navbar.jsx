export const Navbar = () => {
  return (
    <div className="h-[10vh] max-sm:w-[100vw] bg-white flex justify-between items-center px-[50px] shadow-md sticky top-0">
      <div className="flex items-center">
        {/* heading  */}
        <p className="text-xl font-bold">Joel.dev</p>
      </div>
      <div className="flex items-center gap-6 text-md text-gray-700 font-semibold">
        <a href="#home" className="hover:text-blue-500 max-sm:hidden">
          Home
        </a>
        <a href="#about" className="hover:text-blue-500 max-sm:hidden">
          About
        </a>
        <a href="#projects" className="hover:text-blue-500 max-sm:hidden">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-500 max-sm:hidden">
          Contact
        </a>
        <button
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 active:bg-blue-700"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1UXtScTqs3TTz0RWY052Ykfqd6RD-snM1/view?usp=sharing"
            )
          }
        >
          Resume
        </button>
      </div>
    </div>
  );
};
