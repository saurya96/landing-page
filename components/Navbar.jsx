export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/95 flex justify-between items-center px-12 py-5 shadow-2xl border-b-2 border-blue-500/30">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
          <span className="text-slate-950 font-bold text-xl">C</span>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          CodeLearn
        </h1>
      </div>

      <ul className="hidden md:flex gap-10 font-semibold text-slate-300">
        <li className="relative cursor-pointer group">
          <span className="hover:text-blue-400 transition-colors duration-300">Home</span>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
        </li>
        <li className="relative cursor-pointer group">
          <span className="hover:text-blue-400 transition-colors duration-300">Courses</span>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
        </li>
        <li className="relative cursor-pointer group">
          <span className="hover:text-blue-400 transition-colors duration-300">About</span>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
        </li>
        <li className="relative cursor-pointer group">
          <span className="hover:text-blue-400 transition-colors duration-300">Contact</span>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
        </li>
      </ul>

      <button className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
        Sign In
      </button>
    </nav>
  );
}
