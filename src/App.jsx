import { BriefcaseIcon, CalendarIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const services = [
  {
    name: 'Pipeline Architecture',
    description: 'Developing ELT data pipelines from the ground up, using modern tools like DBT and Apache Airflow for model management and orchestration.',
  },
  {
    name: 'Infrastructure Automation',
    description: 'Refactoring and managing Kubernetes analytics namespaces and CI/CD pipelines to build robust and manageable systems.',
  },
  {
    name: 'SQL/DB Optimization',
    description: 'Restructuring and optimizing databases to increase query speed and data accessibility for analytics and reporting.',
  },
]

const techStack = [
  'Snowflake', 'MySQL', 'AWS Athena', 'ClickHouse', 'PostgreSQL', 'SQLite',
  'Redash', 'Tableau', 'Lightdash', 'Snowpark', 'Looker', 'Grafana',
  'Python', 'SQL', 'JavaScript',
  'Apache Airflow', 'DBT', 'Apache Kafka', 'AWS S3',
  'Docker', 'Kubernetes', 'Helm', 'Gitlab CI', 'Rancher',
];

const experience = [
  {
    company: 'RocketHash',
    role: 'Data Engineer',
    period: '2022 - Present',
    description: 'Developed an ELT data pipeline from the ground up, using DBT as model management tool and Apache Airflow as orchestration tool. Refactored database structure to make querying the data faster. Interacted with a Data Analysis team and a Development team.',
  },
  {
    company: 'Gameloft',
    role: 'Data Engineer',
    period: '2018 - 2022',
    description: 'Developed pipeline for machine learning models deployment to production with Apache Airflow. Developed Python interfaces for internal infrastructure and a LiveOps automation framework.',
  },
  {
    company: 'Gameloft',
    role: 'Data Scientist',
    period: '2016 - 2018',
    description: 'Maintained multiple Python packages for internal infrastructure and data access. Developed a pipeline for updating Tableau dashboards. Prepared ML models to better understand player behaviour.',
  }
]

export default function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-teal-400">Anton Bohdanov</a>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#tech-stack" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tech Stack</a>
              <a href="#experience" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}


function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-16 hero-gradient">
      <div className="mx-auto max-w-2xl py-16 sm:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Building Robust Data Infrastructure
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I'm a Data Engineer specializing in ELT pipelines, infrastructure automation, and data analysis. I help businesses unlock the power of their data.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://calcom.phaust.pp.ua/anton.b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-500 px-5 py-3 text-base font-medium text-white hover:bg-teal-600"
            >
              <CalendarIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Book a Consultation
            </a>
          </div>
        </div>
            <a href="#services" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Services() {
  return (
    <div id="services" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-400">My Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I Do
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I offer a range of services to help you build, optimize, and maintain your data infrastructure.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function TechStack() {
  return (
    <div id="tech-stack" className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-400">My Toolkit</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I Use
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span key={tech} className="inline-flex items-center rounded-md bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-gray-600">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div id="experience" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-400">My Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work Experience
          </p>
        </div>
        <div className="mt-16 space-y-16">
          {experience.map((job, jobIdx) => (
            <div key={jobIdx} className="relative pl-8">
              <div className="absolute left-0 top-0 h-full w-px bg-gray-700"></div>
              <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-teal-500"></div>
              <div className="flex items-baseline">
                <h3 className="text-lg font-semibold text-white">{job.role} at {job.company}</h3>
                <p className="ml-4 text-sm text-gray-400">{job.period}</p>
              </div>
              <p className="mt-2 text-base text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CTA() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to build your data solution?</span>
          <span className="block text-teal-400">Let's talk.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://calcom.phaust.pp.ua/anton.b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-500 px-5 py-3 text-base font-medium text-white hover:bg-teal-600"
            >
              <CalendarIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-6 lg:px-8">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Anton Bohdanov. All rights reserved.
        </p>
      </div>
    </footer>
  )
}