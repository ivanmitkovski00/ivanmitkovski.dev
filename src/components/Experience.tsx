type ExperienceProps = {
  experience: string;
  year: string | number;
  description: string;
  link: string;
};

export default function Experience({
  experience,
  year,
  description,
  link,
}: ExperienceProps) {
  return (
    <article className="space-y-2 relative">
      <time
        className="text-[#E0E0E0] text-3xl font-semibold block"
        dateTime={typeof year === "number" ? year.toString() : undefined}
      >
        {year}
      </time>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="uppercase text-[#a8d4e6] font-semibold text-lg hover:underline hover:text-[#d0f0ff] transition-colors duration-200 block z-20"
      >
        {experience}
      </a>
      <p className="text-[#afafaf] tracking-wide text-base">
        {description}
      </p>
    </article>
  );
}
