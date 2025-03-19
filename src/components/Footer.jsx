import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <nav className="w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg  shadow-lg text-gray-400">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <span className="mr-2">{""}© 2025 Copyright</span>
          <div className="icons">
            <a
              href="https://github.com/ousafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" className="mr-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/safa-ouammou-1a1408249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" className="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
