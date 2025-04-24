import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Project from "./Project";

const projects = [
  {
    projectName: "PackSense AI",
    projectDescription:
      "An AI-powered packing assistant that creates optimized lists for your travel needs.",
    demoLink: "#",
    codeRepoLink: "#",
  },
  {
    projectName: "BudgetWise",
    projectDescription:
      "Track your expenses and savings with intuitive charts and auto-categorization.",
    demoLink: "#",
    codeRepoLink: "#",
  },
  {
    projectName: "WeatherCraft",
    projectDescription:
      "Real-time forecasts with stylish visuals and smart packing tips.",
    demoLink: "#",
    codeRepoLink: "#",
  },
  {
    projectName: "DevLinker",
    projectDescription:
      "Connect your GitHub, portfolio, and social links in a clean one-pager.",
    demoLink: "#",
    codeRepoLink: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="px-7 py-10 mt-18">
      <motion.h3
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-5xl md:text-7xl font-semibold mb-10"
      >
        Projects
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="flex flex-wrap -mx-2 mt-28"
      >
        {projects.map((project) => (
          <div key={project.projectName} className="w-full sm:w-1/2 px-2 mb-6">
            <Project {...project} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
