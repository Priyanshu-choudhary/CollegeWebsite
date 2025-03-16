const stats = [
  { id: 1, name: 'Trusted by Over 1000 Students', value: '1000+' },
  { id: 2, name: 'Guided by Passionate Faculty Members', value: '20' },
  { id: 3, name: 'Explore Dynamic Courses', value: '5' },
  { id: 4, name: 'Successful Alumni Worldwide', value: '100+' },
  { id: 5, name: 'Industry Partnerships & Collaborations', value: '10+' },
  { id: 6, name: 'Years of Academic Excellence', value: '10+' },
  { id: 7, name: 'Student Clubs & Organizations', value: '4+' },
  { id: 8, name: 'Placement Rate', value: '90%' },
  { id: 12, name: 'Entrepreneurial Startups from Students', value: '2+' },

];

  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
       
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center text-gray-900 text-5xl pb-20">Trusted by Students </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  