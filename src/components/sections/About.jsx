export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TailwindCSS", "Git"];
  const backendSkills = ["PHP", "Laravel", "Python", "MySQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            A motivated fresh graduate, passionate about leveraging skills and
            knowledge to build a successful and impactful career in the tech
            industry.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education  & Experience*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            {/* Education */}
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>
                  {" "}
                  Specialized Technician Diploma in Computer Engineering{" "}
                </strong>{" "}
                - Higher School of Marrakech (2024-2025)
              </li>
              <li>
                <strong>
                  {" "}
                  Bachelor's Degree in Fundamental Studies in Life Sciences{" "}
                </strong>{" "}
                -Semlalia Faculty of Sciences (2023-2024)
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Activities </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold"> LeetCode </h4>
                <p>Solving 10 problems.</p>
              </div>

              <div>
                <h4 className="font-semibold"> SalamHack </h4>
                <p>Participation in the SalamHack 2025 hackathon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
