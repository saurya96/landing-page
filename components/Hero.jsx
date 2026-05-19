export default function Hero() {
  return (
    <section className="relative text-center py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Decorative tech blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Learn Coding Easily 🚀
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Start your coding journey with beginner-friendly
          courses and real projects. Master web development
          from scratch with our expert instructors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
            Start Learning Free
          </button>
          <button className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-500/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}
