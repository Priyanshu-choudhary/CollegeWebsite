const people = [

    {
        name: 'Dr. Ramesh Gupta',
        role: 'Principal',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
        name: 'Prof. Anjali Mehta',
        role: 'Director',
        imageUrl:
            'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dr. Sandeep Sharma',
        role: 'Head of Computer Science Department',
        imageUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dr. Priya Verma',
        role: 'Head of Electronics Department',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Prof. Manish Khanna',
        role: 'Senior Lecturer, Mathematics',
        imageUrl:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dr. Neha Kapoor',
        role: 'Senior Lecturer, Physics',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

// More people...


export default function Faculty() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                        Meet our Faculty
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        "Our faculty members are experienced professionals committed to academic excellence, research, and mentorship. Meet the experts shaping the future of our students."
                    </p>
                </div>
                <ul
                    role="list"
                    className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    alt={person.name}
                                    src={person.imageUrl}
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                                <h3 className="mt-4 text-lg font-semibold text-gray-900">{person.name}</h3>
                                <p className="text-sm font-medium text-indigo-600">{person.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
