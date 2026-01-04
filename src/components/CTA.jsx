
import { BriefcaseIcon, CalendarIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function CTA() {
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
