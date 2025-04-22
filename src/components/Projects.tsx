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
  return (
    <section className="px-7 py-10 mt-18">
      <h3 className="text-white text-5xl md:text-7xl font-semibold mb-10">
        Projects
      </h3>

      <div className="flex flex-wrap -mx-2 mt-28">
        {projects.map((project) => (
          <div key={project.projectName} className="w-full sm:w-1/2 px-2 mb-6">
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
