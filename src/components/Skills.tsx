import React, { useEffect, useRef, useState } from 'react';
import {
  FaDocker, FaAws, FaLinux, FaGitAlt, FaJenkins,
  FaCodeBranch
} from 'react-icons/fa';
import {
  SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiSonarqube, SiOwasp
} from 'react-icons/si';
import { BsTerminal } from 'react-icons/bs';

interface Skill {
  name: string;
  level: number;
  category: 'cloud' | 'automation' | 'monitoring' | 'other';
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: 'Docker', level: 85, category: 'automation', icon: <FaDocker className="text-2xl" /> },
  { name: 'Jenkins', level: 80, category: 'automation', icon: <FaJenkins className="text-2xl" /> },
  { name: 'AWS', level: 70, category: 'cloud', icon: <FaAws className="text-2xl" /> },
  { name: 'Kubernetes', level: 70, category: 'automation', icon: <SiKubernetes className="text-2xl" /> },
  { name: 'Terraform', level: 60, category: 'automation', icon: <SiTerraform className="text-2xl" /> },
  { name: 'Linux', level: 85, category: 'other', icon: <FaLinux className="text-2xl" /> },
  { name: 'Git', level: 85, category: 'automation', icon: <FaGitAlt className="text-2xl" /> },
  { name: 'Prometheus', level: 75, category: 'monitoring', icon: <SiPrometheus className="text-2xl" /> },
  { name: 'Grafana', level: 75, category: 'monitoring', icon: <SiGrafana className="text-2xl" /> },
  { name: 'Sonarqube', level: 80, category: 'automation', icon: <SiSonarqube className="text-2xl" /> },
  { name: 'OWASP', level: 70, category: 'automation', icon: <SiOwasp className="text-2xl" /> },
  { name: 'Shell Scripting', level: 60, category: 'automation', icon: <BsTerminal className="text-2xl" /> },
  { name: 'CI/CD', level: 80, category: 'automation', icon: <FaCodeBranch className="text-2xl" /> },
];

const SkillBar: React.FC<{ name: string; level: number; icon: JSX.Element }> = ({ name, level, icon }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`;
          barRef.current.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) observer.observe(barRef.current);

    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1 items-center">
        <div
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          title={name}
        >
          {icon}
          {name}
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          ref={barRef}
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'cloud' | 'automation' | 'monitoring' | 'other'>('all');

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

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit has been refined through hands-on experience with modern DevOps tools and practices.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-800 rounded-lg">
            {(['all', 'cloud', 'automation', 'monitoring', 'other'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedSkills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
