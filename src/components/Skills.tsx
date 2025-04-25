import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
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

const skillData = [
  { icon: faHtml5, name: "HTML", color: "#f16a30" },
  { icon: faCss3, name: "CSS", color: "#039be5" },
  { icon: faJs, name: "JavaScript", color: "#fed600" },
  { icon: faReact, name: "React", color: "#01d6ff" },
  { icon: faPhp, name: "PHP", color: "#7b7fb5" },
  { icon: faLaravel, name: "Laravel", color: "#ff3325" },
  { icon: faGitAlt, name: "Git", color: "#f05539" },
  { icon: faDatabase, name: "MySQL", color: "#6b6b6b" },
];

function shuffleArray(array: typeof skillData) {
  return [...array].sort(() => Math.random() - 0.5);
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Skills() {
  const [skills, setSkills] = useState(skillData);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const handleShuffle = () => {
    setSkills(shuffleArray(skills));
  };

  return (
    <section ref={sectionRef} className="px-7 py-10">
      <h3 className="text-white text-5xl md:text-7xl font-semibold mb-10">
        Skills
      </h3>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-28"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {skills.map(({ icon, name, color }) => (
          <motion.div
            key={name}
            layout
            variants={itemVariants}
            onClick={handleShuffle}
            className="cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <Skill
              skillIcon={
                <FontAwesomeIcon
                  icon={icon}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  color={color}
                />
              }
              skillName={name}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
