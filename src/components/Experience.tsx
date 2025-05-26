import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'BRRSOFTWARES Systems Private Limited',
    position: 'Associate Software Engineer - DevOps',
    location: 'Hyderabad',
    period: 'Aug 2024 - Present',
    description: [
      'Implemented and maintained CI/CD pipelines using Jenkins, reducing deployment time by 60%',
      'Managed containerized applications using Docker and Kubernetes on AWS',
      'Set up monitoring and alerting using Prometheus and Grafana',
      'Automated infrastructure provisioning with Terraform, managing resources across AWS accounts'
    ],
    current: true
  }
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in DevOps and cloud infrastructure.
          </p>
        </div>

        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 ml-3 md:ml-6 pl-8 md:pl-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`mb-12 last:mb-0 relative ${
                index === 0
                  ? 'animate-fade-in animation-delay-300'
                  : index === 1
                  ? 'animate-fade-in animation-delay-600'
                  : 'animate-fade-in animation-delay-900'
              }`}
            >
              <div className="absolute -left-[41px] md:-left-[46px] top-0 w-8 h-8 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 rounded-full flex items-center justify-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    experience.current
                      ? 'bg-blue-600 dark:bg-blue-500 animate-pulse'
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                ></div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {experience.company}
                    </h4>
                  </div>

                  {experience.current && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1.5" />
                    <span>{experience.period}</span>
                  </div>

                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1.5" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
