const services = [
  {
    title: "ELT Pipelines",
    description: "Designing and building robust and scalable ELT pipelines to move and transform data efficiently.",
    gridClass: "md:col-span-2",
  },
  {
    title: "Infrastructure Automation",
    description: "Automating the deployment and management of data infrastructure using tools like Terraform and Kubernetes.",
    gridClass: "",
  },
  {
    title: "Data Analysis",
    description: "Analyzing large datasets to extract valuable insights and support business decisions.",
    gridClass: "",
  },
  {
    title: "Data Modeling",
    description: "Designing and implementing data models for optimal storage and retrieval.",
    gridClass: "md:col-span-2",
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8 font-mono">
        What I Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:border-electric-cyan hover:bg-electric-cyan/10 ${service.gridClass}`}
          >
            <h3 className="text-xl font-bold text-electric-cyan mb-2 font-mono">{service.title}</h3>
            <p className="text-gray-300 font-sans">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
