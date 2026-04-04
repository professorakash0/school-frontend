import GlassCard from "../../components/user components/GlassGrid";
import { Users } from "lucide-react";

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-20 bg-linear-to-br from-yellow-100 via-white to-green-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4 text-green-700">
          Our Teachers
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
          Our teachers are highly educated, experienced, and passionate about teaching. They play a vital role in shaping the academic and personal growth of every student.
        </p>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          We maintain a respectful and comfortable environment for all students, including separate sections for girls and dedicated female teachers to ensure the best learning experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard title="Experienced Staff" icon={<Users />} img="https://images.unsplash.com/photo-1596495578065-6e0763fa1178" />
          <GlassCard title="Friendly Environment" icon={<Users />} img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
          <GlassCard title="Female Teachers" icon={<Users />} img="https://images.unsplash.com/photo-1544717305-2782549b5136" />
        </div>

      </div>
    </section>
  );
}

export default TeachersSection