import { RevealOnScroll } from "../RevealOnScroll ";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Management system for a coworking space
              </h3>
              <p className="text-gray-400 mb-4">
                The application will allow coworking space managers to oversee
                members, space reservations, events, subscriptions, invoices,
                and various other management aspects. On the other hand, users
                will be able to book workspaces, register for events offered by
                the space, and manage their personal profiles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Bootstrap", "PHP", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  In Progress
                </span>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-orange-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Ishara Plateform</h3>
              <p className="text-gray-400 mb-4">
                A collaborative platform designed to analyze symptoms and
                interpret medical images. Built with a collaborator, this
                platform leverages AI to help users understand their health
                conditions. It allows users to input symptoms for analysis or
                upload medical images for interpretation, providing preliminary
                insights before consulting a healthcare professional.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "Together AI"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-orange-500/10 text-orange-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-orange-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};
