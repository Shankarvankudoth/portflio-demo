import React, { useEffect, useRef } from 'react';
import shankar from '../assets/shankar.pdf'; // Adjust the path as necessary
const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 px-6 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-4 translate-y-4 dark:bg-blue-500"></div>
              <img 
                src="https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg" 
                alt="Professional portrait" 
                className="relative z-10 rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-blue-600 dark:text-blue-400 mr-2">About</span> Me
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hello! I'm Shankar, a passionate DevOps Engineer with 1 year of hands-on experience in automating infrastructure, optimizing CI/CD pipelines, and supporting scalable cloud-native applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I've worked extensively with Docker and Jenkins to streamline build and deployment workflows. I'm comfortable managing Linux-based systems and have used monitoring tools like Prometheus and Grafana to ensure infrastructure reliability. I have practical experience with AWS cloud services and intermediate proficiency in Kubernetes and Terraform for managing container orchestration and infrastructure as code.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My approach emphasizes automation, continuous improvement, and system observability. I'm eager to keep learning and contribute to high-performing DevOps teams by applying best practices in cloud infrastructure, monitoring, and deployment automation.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">San Francisco, CA</p>
              </div>
              
             <div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
  <p className="text-gray-700 dark:text-gray-300">vshankar6201@gmail.com</p>
</div>

              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Availability</h3>
                <p className="text-gray-700 dark:text-gray-300">Full-time, Remote</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">1 Year</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href={shankar}
                download="shankar-Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;