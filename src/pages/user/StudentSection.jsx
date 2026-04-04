import GlassCard from "../../components/user components/GlassGrid";
import { BookOpen, Users } from "lucide-react";

const Students = () => {
  return (
    <section id="students" className="py-20 bg-linear-to-br from-green-100 via-white to-yellow-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-4 text-green-700">
          Our Students
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
          At Al Imran School System, our students are the foundation of our vision. We focus on developing strong academic skills along with discipline, confidence, and moral values to prepare them for future challenges.
        </p>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Through practical tasks, hands-on learning, and educational trips, we ensure that students not only gain knowledge but also understand how to apply it in real life situations.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard title="Practical Learning" icon={<BookOpen />} img="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b" />
          <GlassCard title="Educational Trips" icon={<Users />} img="https://images.unsplash.com/photo-1509062522246-3755977927d7" />
          <GlassCard title="Skill Development" icon={<BookOpen />} img="https://plus.unsplash.com/premium_photo-1681248156475-f95f078846d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaG9vbHN8ZW58MHx8MHx8fDA%3D" />
        </div>

      </div>
    </section>
  );
}

export default Students