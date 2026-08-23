import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-12 min-h-[70vh] items-center relative">
      <div className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl text-electric-cyan font-mono mb-2">Anton Bohdanov</h2>
        <h1 className="text-5xl md:text-6xl font-bold font-mono text-white mb-4">
          Building Robust Data Infrastructure
        </h1>
        <Typewriter />
      </div>
      <div className="p-4 md:p-8">
        <DataPipelineVisualization />
      </div>
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-electric-cyan transition-colors"
      >
        <span className="text-xs font-mono mb-1">scroll</span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </a>
    </div>
  );
};

const Typewriter = () => {
  const [text, setText] = useState("");
  const fullText = "A Senior Data Engineer specializing in ELT pipelines, infrastructure automation, and data analysis.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 10);
    return () => clearInterval(typing);
  }, []);

  return <p className="text-lg text-gray-300">{text}</p>;
};

const DataPipelineVisualization = () => {
  return (
    <div className="relative h-64 w-full">
      {/* Node 1 */}
      <motion.div
        className="absolute top-1/2 left-0 w-8 h-8 bg-electric-cyan rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Node 2 */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-8 h-8 bg-data-purple rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />

      {/* Node 3 */}
      <motion.div
        className="absolute top-3/4 left-2/3 w-8 h-8 bg-electric-cyan rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />

      {/* Node 4 */}
      <motion.div
        className="absolute top-1/2 right-0 w-8 h-8 bg-data-purple rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
      />

      {/* Lines */}
      <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
        <motion.line x1="16" y1="50%" x2="33.33%" y2="25%" stroke="#45A29E" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.line x1="33.33%" y1="25%" x2="66.66%" y2="75%" stroke="#6A0DAD" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.line x1="66.66%" y1="75%" x2="100%" y2="50%" stroke="#45A29E" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </div>
  );
};

export default Hero;