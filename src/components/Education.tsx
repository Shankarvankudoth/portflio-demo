import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import AwsImg from "../assets/aws technical.png"
import AwsImg2 from "../assets/Solutions architect knowledge badge assessment.png"
import Image from './Image';
interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  achievements?: string[];
}

const education: EducationItem[] = [
  {
    id: 1,
    institution: 'Vignana Bharathi Institute of Technology',
    degree: 'Bachelor of Technology',
    field: 'Information Technology',
    period: '2019 - 2023',
    achievements: ['GPA: 7.0']
  }
];

interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
  path:string;
}

const certifications: CertificationItem[] = [
  {
    id: 1,
    name: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    url: '/aws.png', // <-- in public/
    path:AwsImg
  },
  {
    id: 1,
    name: 'AWS Solutions Architect Knowledge',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    url: '/aws.png', // <-- in public/
    path:AwsImg2
  }
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAwsImg, setIsImg] = useState(false);
  const [imgpath, setImgpath] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-6 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications in DevOps and cloud technologies.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.institution}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {item.degree} in {item.field}
                  </p>
                  <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} className="mr-1.5" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
              {item.achievements && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Professional Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div onClick={()=>{
              setImgpath(cert.path);
      setIsImg(true);}} className='cursor-pointer w-full px-2'>
              {/* <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            > */}
              <div className="flex items-center mb-3 cursor-pointer"
              
              >
                <Award size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.date}
                </span>
              </div>
              <img
                src={cert?.path}
                alt={cert.name}
                className="w-full max-h-[200px] object-contain mx-auto mb-3"
              />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {cert.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            {/* </a> */}
            </div>
          ))}
        </div>
      </div>
      {isAwsImg && 
      <Image
        imgSrc={imgpath}
        onClose={()=>{setIsImg(!isAwsImg)}}
      />}
    </section>
  );
};

export default Education;
