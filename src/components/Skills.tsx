import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skill from "./Skill";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPhp,
  faLaravel,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { icon: faHtml5, name: "HTML", color: "#f16a30" },
  { icon: faCss3, name: "CSS", color: "#039be5" },
  { icon: faJs, name: "JavaScript", color: "#fed600" },
  { icon: faReact, name: "React", color: "#01d6ff" },
  { icon: faPhp, name: "PHP", color: "#7b7fb5" },
  { icon: faLaravel, name: "Laravel", color: "#ff3325" },
  { icon: faGitAlt, name: "Git", color: "#f05539" },
  { icon: faDatabase, name: "MySQL", color: "#6b6b6b" },
  
];

export default function Skills() {
  return (
    <section className="px-7 py-10">
      <h3 className="text-white text-5xl md:text-7xl font-semibold mb-10">
        Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-28">
        {skills.map(({ icon, name, color }) => (
          <Skill
            key={name}
            skillIcon={<FontAwesomeIcon icon={icon} size="4x" color={color} />}
            skillName={name}
          />
        ))}
      </div>
    </section>
  );
}
