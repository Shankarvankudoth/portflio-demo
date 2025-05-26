// import React, { useEffect, useRef } from 'react';
// import { ArrowDownCircle, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

// const Hero: React.FC = () => {
//   const titleRef = useRef<HTMLHeadingElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in');
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (titleRef.current) {
//       observer.observe(titleRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section 
//       id="home" 
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
//       <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5 dark:opacity-10 z-0"></div>

//       <div className="container mx-auto max-w-4xl z-10">
//         <div className="text-center space-y-8">
//           <h1 
//             ref={titleRef}
//             className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white opacity-0 transition-opacity duration-1000"
//           >
//             Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shankar</span>
//           </h1>
          
//           <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in animation-delay-300">
//               DevOps Engineer
//           </h2>
          
//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in animation-delay-600">
//             I automate infrastructure, streamline CI/CD pipelines, and build scalable, cloud-native systems
//   using tools like Docker, Jenkins, Linux, Prometheus, Grafana, and AWS. Intermediate knowledge of Kubernetes and Terraform.
//           </p>
          
//           <div className="flex justify-center space-x-4 animate-fade-in animation-delay-900">
//             <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-xl">
//               Contact Me
//             </a>
//             <a href="#projects" className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
//               View Projects
//             </a>
//           </div>
          
//           <div className="flex justify-center space-x-6 pt-8 animate-fade-in animation-delay-1200">
//             <a href="https://github.com/Shankarvankudoth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
//               <GitHub size={24} />
//               <span className="sr-only">GitHub</span>
//             </a>
//             <a href="https://www.linkedin.com/in/shankar-vankudoth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
//               <Linkedin size={24} />
//               <span className="sr-only">LinkedIn</span>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
//               <Twitter size={24} />
//               <span className="sr-only">Twitter</span>
//             </a>
//           </div>
//         </div>
//       </div>
      
//       <a 
//         href="#about" 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
//       >
//         <ArrowDownCircle size={32} />
//         <span className="sr-only">Scroll to About section</span>
//       </a>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import devopsBg from '../assets/background.webp'; // ✅ Import the new background image

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>

      {/* ✅ New DevOps background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-10 z-0"
        style={{ backgroundImage: `url(${devopsBg})` }}
      ></div>

      <div className="container mx-auto max-w-4xl z-10">
        <div className="text-center space-y-8">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white opacity-0 transition-opacity duration-1000"
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shankar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in animation-delay-300">
            DevOps Engineer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in animation-delay-600">

            I automate infrastructure, streamline CI/CD pipelines, and build scalable, cloud-native systems using tools like Docker, Jenkins, Linux, Prometheus, Grafana, and AWS. Intermediate knowledge of Kubernetes and Terraform.
          </p>

          <div className="flex justify-center space-x-4 animate-fade-in animation-delay-900">
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-xl">
              Contact Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
              View Projects
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-8 animate-fade-in animation-delay-1200">
            <a href="https://github.com/Shankarvankudoth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <GitHub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shankar-vankudoth" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
      >
        <ArrowDownCircle size={32} />
        <span className="sr-only">Scroll to About section</span>
      </a>
    </section>
  );
};

export default Hero;
