import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-slate-950 text-white px-6">

      <h1 className="text-6xl font-bold text-cyan-400">
        AuraGen
      </h1>

      <p className="mt-6 text-2xl text-gray-300">
        Self-Healing Generative UI
      </p>

      <p className="mt-4 max-w-2xl text-center text-gray-500">
        AuraGen detects user frustration while interacting with complex
        interfaces and dynamically transforms them into simpler,
        AI-generated experiences in real time.
      </p>

      <Link
    to="/demo"
    className="mt-10 px-8 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition inline-block"
>
    Launch Demo
</Link>

    </section>
  );
}

export default Hero;