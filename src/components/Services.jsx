
import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "TEN Space Research",
    description: "Space research expands knowledge, drives innovation, inspires exploration, and reveals the universe’s mysteries.",
    icon: "🚀",
    delay: 0.2,
    url: "https://ten-space-research-psi.vercel.app"
  },
//   {
//     title: "TEN Jobs",
//     description: "Exclusive HR job portal connecting top talent with leading organizations.",
//     icon: "💼",
//     delay: 0.3,
//     url: "https://jobs.entrepreneurshipnetwork.net/"
//   },
//   {
//     title: "TEN Internships",
//     description: "Structured internship programs designed to nurture future HR leaders.",
//     icon: "🌱",
//     delay: 0.4,
//     url: "https://internships.entrepreneurshipnetwork.net/"
//   },
//   {
//     title: "TEN HR Consulting",
//     description: "Strategic HR consulting services for organizational transformation.",
//     icon: "📊",
//     delay: 0.5,
//     url: "https://hrconsulting.entrepreneurshipnetwork.net/"
//   },
//   {
//     title: "TEN HR Mentors",
//     description: "Connect with industry-leading HR professionals for personalized guidance.",
//     icon: "🤝",
//     delay: 0.6,
//     url: "https://hr-mentor-nine.vercel.app/"
//   },
// {
//   title: "TEN HR Automation",
//   description: "Generate offer letters, letters of recommendation, completion letters, and more.",
//   icon: "📝",
//   delay: 0.7,
//   url: "https://ten-ivr.vercel.app/"
// }
];

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <a 
            key={service.title} 
            href={service.url} 
            className="block"
            title={`Learn more about ${service.title}`} 
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
