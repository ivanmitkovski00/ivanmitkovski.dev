import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

type ProjectProps = {
  projectName: string;
  projectDescription: string;
  demoLink: string;
  codeRepoLink: string;
  releaseDate: string;
};

export default function Project({
  projectName,
  projectDescription,
  demoLink,
  codeRepoLink,
  releaseDate,
}: ProjectProps) {
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div className="relative group rounded-3xl bg-gradient-to-br from-[#1E2024] to-[#2A2D32] p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="blur-[8px] relative w-full h-full rounded-3xl bg-[#1E2024]/90 backdrop-blur-[12px] p-4 md:p-6 flex flex-col justify-between transition-all duration-500 group-hover:bg-[#1b1d21]">
        <div className="space-y-4">
          <h4 className="text-white text-lg md:text-2xl lg:text-3xl font-extrabold tracking-wide transition-colors duration-300 group-hover:text-green-400">
            {projectName}
          </h4>
          <p className="text-[#D1D5DB] text-sm md:text-base leading-relaxed">
            {projectDescription}
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 1.5, ease: "linear" },
          scale: { type: "spring", stiffness: 100, damping: 20 },
        }}
        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
      >
        <div className="bg-gradient-to-br from-green-400/30 to-green-700/30 backdrop-blur-lg border border-green-500/30 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-center shadow-2xl text-green-300 font-extrabold text-sm sm:text-base md:text-lg tracking-wider font-mono">
          <span className="text-white">🚀 Launches on </span>
          <span className="text-green-500 text-lg sm:text-xl font-extrabold">
            {formattedDate}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
