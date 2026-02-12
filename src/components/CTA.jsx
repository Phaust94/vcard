import { CalendarIcon } from '@heroicons/react/20/solid';

export default function CTA() {
  return (
    <div className="relative bg-gray-800/50 my-16 rounded-lg border border-gray-700 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl py-12 px-6 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-mono">
          <span className="block">Ready to build your data solution?</span>
          <span className="block text-electric-cyan">Let's talk.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href={import.meta.env.VITE_CALCOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-electric-cyan px-5 py-3 text-base font-medium text-charcoal hover:bg-electric-cyan/80 font-sans"
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
