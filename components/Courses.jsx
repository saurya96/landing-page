const courses = [
  {
    title: "HTML & CSS",
    desc: "Learn website structure and styling.",
    icon: "🎨",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "JavaScript",
    desc: "Make websites interactive and dynamic.",
    icon: "⚡",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "React.js",
    desc: "Build modern frontend applications.",
    icon: "⚛️",
    color: "from-blue-400 to-cyan-500"
  }
];

export default function Courses() {
  return (
    <section className="py-20 px-8 bg-slate-900 border-t border-blue-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Popular Courses
          </h2>
          <p className="text-slate-400 text-lg">Choose from our carefully curated courses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 border border-blue-500/30 hover:border-cyan-400/50"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30`}>
                {course.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-slate-100">
                {course.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {course.desc}
              </p>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                Explore Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
