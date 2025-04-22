import { JSX } from "react";

type Skill = {
  skillIcon: JSX.Element;
  skillName: string;
};

export default function Skill({ skillIcon, skillName }: Skill) {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <div className="flex items-center gap-5 px-8 py-6 bg-[#1E2024] rounded-2xl shadow-md hover:shadow-lg transition duration-300">
        {skillIcon}
        <span className="text-white font-medium text-2xl">{skillName}</span>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.65s_ease-in-out]" />
      </div>
    </div>
  );
}
