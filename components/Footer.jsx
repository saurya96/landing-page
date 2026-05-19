export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-300 border-t border-blue-500/30">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">CodeLearn</h3>
            <p className="text-slate-400">Empowering the next generation of developers.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Courses</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-blue-400 cursor-pointer transition">HTML & CSS</li>
              <li className="hover:text-blue-400 cursor-pointer transition">JavaScript</li>
              <li className="hover:text-blue-400 cursor-pointer transition">React.js</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-blue-400 cursor-pointer transition">About Us</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Blog</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Follow</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-blue-400 cursor-pointer transition">Twitter</li>
              <li className="hover:text-blue-400 cursor-pointer transition">GitHub</li>
              <li className="hover:text-blue-400 cursor-pointer transition">LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-500/20 pt-8 text-center text-slate-400">
          <p>© 2026 CodeLearn. All Rights Reserved. | Made with  by CodeLearn </p>
        </div>
      </div>
    </footer>
  );
}
