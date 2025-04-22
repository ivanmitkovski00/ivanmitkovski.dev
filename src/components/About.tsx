import VerticalTimeline from "./VerticalTimeline";
import Experience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
export default function About() {
  return (
    <div className="px-7 py-10 mt-18">
      <h3 className="text-white text-7xl font-semibold">About</h3>
      <div className="flex items-center space-x-10 mt-18">
        <div className="w-1/2">
          <div className="max-w-2xl mx-auto text-[#E0E0E0]">
            <p className=" text-base md:text-lg font-light leading-relaxed tracking-normal text-left">
              I’m a full‑stack software engineer dedicated to building
              intuitive, high‑performance web applications. I approach every
              project with an eye for clean architecture and efficient
              interfaces—whether that means crafting a real‑time analytics
              dashboard or designing a scalable API.
            </p>
            <p className=" text-base md:text-lg font-light leading-relaxed tracking-normal mt-4 text-left">
              When I’m not architecting code, you’ll find me exploring new
              guitar riffs or hiking the trails around Skopje. I believe
              curiosity, creativity, and a willingness to venture beyond your
              comfort zone are the true ingredients of innovation—and that’s
              exactly how I tackle every challenge.
            </p>
          </div>
        </div>
        <VerticalTimeline />
        <div className="space-y-20 w-1/2">
          <Experience
            experience="IT SUPPORT SPECIALIST & WEB DEVELOPER"
            year={2024}
            description="Built secure e-commerce site and provided daily technical support"
            link="https://www.articbreezesystems.com/"
          />
          <Experience
            experience="PHP INTERN AT PABAU CLINIC SOFTWARE"
            year={2025}
            description="Developed PHP backend and jQuery frontend for optimized healthcare workflows."
            link="https://pabau.com/"
          />
        </div>
      </div>
      <div id="links" className="flex w-fit space-x-4 py-2 z-50 relative">
        <a
          href="https://github.com/ivanmitkovski00"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
          title="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" color="#E0E0E0" />
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-mitkovski-483555270/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
          title="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#E0E0E0" />
        </a>
        <a
          href="mailto:ivanmitkovski2@gmail.com"
          className="hover:scale-110 transition-transform duration-200"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="#E0E0E0" />
        </a>
        <a
          href="public\Ivan Mitkovski - cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
          title="Resume"
        >
          <FontAwesomeIcon icon={faFileLines} size="2x" color="#E0E0E0" />
        </a>
      </div>
    </div>
  );
}
