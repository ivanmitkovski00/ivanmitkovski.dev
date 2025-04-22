import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

type ProjectProps = {
  projectName: string;
  projectDescription: string;
  demoLink: string;
  codeRepoLink: string;
};

export default function Project({
  projectName,
  projectDescription,
  demoLink,
  codeRepoLink,
}: ProjectProps) {
  return (
    <motion.div className="relative group rounded-3xl bg-gradient-to-br from-[#1E2024] to-[#2A2D32] p-[2px] shadow-md hover:shadow-xl">
      <div className="w-full h-full rounded-3xl bg-[#1E2024] p-6 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#1b1d21]">
        <div className="space-y-4">
          <h4 className="text-white text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-green-400">
            {projectName}
          </h4>
          <p className="text-[#D1D5DB] text-sm md:text-base leading-relaxed">
            {projectDescription}
          </p>
        </div>

        <div className="mt-6 flex space-x-6">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300"
          >
            <ExternalLink size={18} />
            <span className="underline underline-offset-4">Demo</span>
          </a>
          <a
            href={codeRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300"
          >
            <Github size={18} />
            <span className="underline underline-offset-4">Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
