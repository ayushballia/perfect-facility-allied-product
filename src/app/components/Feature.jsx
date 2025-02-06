import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Hospitality',
    description:
      'Providing tailored solutions for hotels, resorts, and event spaces to ensure a clean, welcoming, and comfortable environment for guests.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Commercial',
    description:
      'Comprehensive services designed to maintain office buildings, corporate spaces, and industrial facilities, ensuring a safe and efficient workplace.',
    icon: LockClosedIcon,
  },
  {
    name: 'Retail establishments',
    description:
      'Creating spotless, well-maintained spaces for retail stores and shopping centers to enhance customer experience and boost brand perception.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Integrating advanced security measures to safeguard premises, assets, and personnel, offering peace of mind and enhanced protection.',
    icon: FingerPrintIcon,
  }
];


export default function Example() {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-[#7cb800]">Trusted</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Designed to meet the diverse needs of industrial
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          By choosing Perfect Facility & Allied Product, businesses can trust
            in a clean and secure environment that reflects their commitment to
            quality and efficiency.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#2478d0]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
