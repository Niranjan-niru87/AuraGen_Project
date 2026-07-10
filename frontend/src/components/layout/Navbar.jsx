function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          AuraGen
        </h1>

        <ul className="flex gap-8 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">Features</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;