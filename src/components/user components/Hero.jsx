import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <div className="text-center md:text-left">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
          Matric Based School
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Quality Education <br className="hidden sm:block" /> For A Better Future
        </h1>

        <p className="text-gray-500 mt-4 max-w-md mx-auto md:mx-0">
          At Al Imran School System, we focus on strong fundamentals,
          character building, and practical learning to prepare students for
          real life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full hover:bg-green-700 w-full sm:w-auto justify-center"
          >
            Explore More <ArrowRight size={16} />
          </button>

          <button className="flex items-center gap-2 text-gray-700">
            <span className="bg-green-600 text-white p-2 rounded-full">
              <Play size={14} />
            </span>
            Our Activities
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center mt-10 md:mt-0">
        {/* Background shapes */}
        <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-green-400 rounded-3xl rotate-12 opacity-80"></div>
        <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-yellow-300 rounded-3xl -rotate-12 opacity-80"></div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
          alt="Student"
          className="relative w-52 sm:w-64 md:w-72 h-[280px] sm:h-[320px] md:h-[420px] object-cover rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;