import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // ✅ close sidebar after click (mobile)
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
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6">
        <nav
          className={`
            max-w-7xl mx-auto mt-4 px-4 md:px-6 py-4 flex items-center justify-between rounded-2xl transition-all duration-300
            ${
              scrolled
                ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/40"
                : "bg-white shadow"
            }
          `}
        >
          {/* Logo */}
          <h1
            onClick={() => scrollToSection("home")}
            className="text-lg md:text-xl font-bold text-green-600 cursor-pointer"
          >
            Al Imran School
          </h1>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={26} />
          </button>
        </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("home")} className="text-left">
            Home
          </button>

          <button onClick={() => scrollToSection("students")} className="text-left">
            Students
          </button>

          <button onClick={() => scrollToSection("teachers")} className="text-left">
            Teachers
          </button>

          <button onClick={() => scrollToSection("fee-structure")} className="text-left">
            Fee
          </button>

          <button onClick={() => scrollToSection("posting")} className="text-left">
            Updates
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;