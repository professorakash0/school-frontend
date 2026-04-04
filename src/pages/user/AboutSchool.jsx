const AboutSchool = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">About Our School</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Al Imran School System is a matric-based school focused on
            discipline, education, and character building.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Basic Subjects + Computer</li>
            <li>✔ Tarjamatul Quran</li>
            <li>✔ Trips & Practical Tasks</li>
            <li>✔ Separate Girls Section</li>
            <li>✔ Qualified Teachers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSchool