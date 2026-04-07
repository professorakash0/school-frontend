import GlassCard from "../../components/user components/GlassGrid";
import { Users } from "lucide-react";

const TeachersSection = () => {
  return (
    <section
      id="teachers"
      className="py-14 md:py-20 bg-gradient-to-br from-yellow-100 via-white to-green-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-700">
          Our Teachers
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed text-sm sm:text-base">
          Our teachers are highly educated, experienced, and passionate about teaching. 
          They play a vital role in shaping the academic and personal growth of every student.
        </p>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
          We maintain a respectful and comfortable environment for all students, 
          including separate sections for girls and dedicated female teachers to ensure 
          the best learning experience.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <GlassCard
            title="Experienced Staff"
            icon={<Users />}
            img="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
          />

          <GlassCard
            title="Friendly Environment"
            icon={<Users />}
            img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          />

          <GlassCard
            title="Female Teachers"
            icon={<Users />}
            img="https://images.unsplash.com/photo-1544717305-2782549b5136"
          />
        </div>

      </div>
    </section>
  );
};

export default TeachersSection;