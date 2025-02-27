import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
      name: 'Quality Education',
      description:
        'We provide a curriculum designed to empower students with knowledge, critical thinking, and real-world skills.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Safe & Secure Campus',
      description: 'Our campus is equipped with 24/7 security, CCTV surveillance, and a safe learning environment.',
      icon: LockClosedIcon,
    },
    {
      name: 'Scholarships & Financial Aid',
      description: 'We offer merit-based and need-based scholarships to support students in their educational journey.',
      icon: ServerIcon,
    },
  ]
  

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Its Time for</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better Tomorrow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Our college is committed to providing top-quality education, a secure learning environment, and financial support to deserving students.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="woman-standing"
            src="woman-standing.jpg"
            width={202}
            height={102}
            className="w-[45rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
