import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6">
      <nav
        className={`
          max-w-7xl mx-auto mt-4 px-6 py-4 flex items-center justify-between rounded-2xl transition-all duration-300
          ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/40"
              : "bg-white shadow"
          }
        `}
      >
        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-green-600 cursor-pointer"
        >
          Al Imran School
        </h1>

        <div className="hidden md:flex items-center gap-6 text-gray-600 text-sm">
          <button onClick={() => scrollToSection("home")} className="hover:text-black">
            Home
          </button>

          <button onClick={() => scrollToSection("students")} className="hover:text-black">
            Students
          </button>

          <button onClick={() => scrollToSection("teachers")} className="hover:text-black">
            Teachers
          </button>

          <button onClick={() => scrollToSection("fee-structure")} className="hover:text-black">
            Fee
          </button>

          <button onClick={() => scrollToSection("posting")} className="hover:text-black">
            Updates
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;