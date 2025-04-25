import { JSX } from "react";

type Skill = {
  skillIcon: JSX.Element;
  skillName: string;
};

export default function Skill({ skillIcon, skillName }: Skill) {
  return (
    <div className="relative group overflow-hidden rounded-2xl w-full max-w-[95vw] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div className="flex items-center gap-3 sm:gap-5 px-4 sm:px-6 md:px-8 py-3 sm:py-5 md:py-6 bg-[#1E2024] rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        <div className="text-2xl sm:text-3xl md:text-5xl">{skillIcon}</div>
        <span className="text-white font-semibold text-base sm:text-lg md:text-2xl break-words">
          {skillName}
        </span>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.65s_ease-in-out]" />
      </div>
    </div>
  );
}
