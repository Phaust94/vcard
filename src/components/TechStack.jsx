import { DiPython } from "react-icons/di";
import { SiDbt, SiApacheairflow, SiSnowflake, SiKubernetes } from "react-icons/si";

const technologies = [
  { icon: <DiPython className="text-4xl" />, name: "Python" },
  { icon: <SiDbt className="text-4xl" />, name: "dbt" },
  { icon: <SiApacheairflow className="text-4xl" />, name: "Airflow" },
  { icon: <SiSnowflake className="text-4xl" />, name: "Snowflake" },
  { icon: <SiKubernetes className="text-4xl" />, name: "Kubernetes" },
];

const TechStack = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8 font-mono">
        Tech Stack
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {technologies.concat(technologies).map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-32 mx-4 flex flex-col items-center justify-center bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm grayscale hover:grayscale-0 transition-all duration-300 hover:bg-electric-cyan/10 hover:border-electric-cyan"
            >
              <div className="text-gray-400 group-hover:text-electric-cyan transition-colors duration-300">
                {tech.icon}
              </div>
              <p className="mt-2 text-sm text-gray-300 font-sans">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
