export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent leading-right">
          Hi, I'm Safa Ouammou
        </h1>

        <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
        I am a recent graduate full-stack developer, eager to achieve my goals through gaining extensive experience.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1HvUNV8CsSC7VwH17zzUEcNDouH6slXdm/view?usp=sharing" target="_blank"
              className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 20, 147, 0.4)]"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 20, 147, 0.4)] hover:bg-orange-500/10"
            >
              Contact Me
            </a>
          </div>
      </div>
    </section>
  );
};
