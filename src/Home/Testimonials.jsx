import { useState, useEffect } from "react";

export default function Testimonials() {
  const people = [
    {
      id: 1,
      name: "Dr. Rahul Tyagi",
      post: "Secretary , Meerut College For Girls Education",
      msg: "“At Meerut College For Girls Education, we believe that education is the key to empowerment. Our mission is to provide young women with the knowledge, confidence, and skills to shape their own future. We are committed to creating a nurturing and intellectually stimulating environment where every student can thrive and achieve her dreams. Together, we are building a generation of strong, independent, and successful women.”",
      img: "WhatsApp Image 2025-03-02 at 16.54.26_632131df.jpg",
    },
    {
      id: 2,
      name: "Mrs. Rajkumari Tyagi",
      post: "Patron",
      msg: "“Education is not just about acquiring knowledge; it is about shaping character and building a better society. At our institution, we strive to create an environment where every student can reach her full potential.”",
      img: "patron.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("translate-x-0");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("-translate-x-full"); // Move slide left
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % people.length);
        setSlideDirection("translate-x-full"); // Move slide right for reset
        setTimeout(() => setSlideDirection("translate-x-0"), 100); // Return to center
      }, 500); // Delay for slide transition effect
    }, 5000); // Change testimonial every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <p className="text-center text-4xl font-bold">Testimonials</p>
        <div className="relative mt-10 overflow-hidden w-full h-auto">
          <div
            className={`flex w-full transition-transform duration-500 ease-in-out ${slideDirection}`}
          >
            <div className="min-w-full text-center">
              <blockquote className="font-light text-gray-900">
                <p>{people[index].msg}</p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  alt=""
                  src={people[index].img}
                  className="mx-auto size-30 rounded-full transition-all duration-500"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">{people[index].name}</div>
                  <svg
                    width={4}
                    height={4}
                    viewBox="0 0 2 2"
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-600">{people[index].post}</div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
