import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

import asiMain from '../assets/project-images/asi_main.png';
import asiApplication from '../assets/project-images/asi_application.png';
import containerStats from '../assets/project-images/container_stats.png';
import portainerImages from '../assets/project-images/portainer_images.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  category: 'automation' | 'infrastructure' | 'monitoring' | 'deployment';
  toolsDescription?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ASI's Business Automation Monitoring",
    description: `Implemented a containerized monitoring solution for ASI's internal systems. Daily MongoDB and application logs are collected and visualized for observability. Portainer and container stats are used for managing services and resource usage.`,
    image: asiMain,
    images: [asiApplication, containerStats, portainerImages],
    tags: ['Portainer', 'Docker', 'MongoDB Logs', 'Monitoring'],
    demoUrl: '',
    repoUrl: 'https://github.com/Shankarvankudoth',
    category: 'monitoring',
    toolsDescription: `
Portainer: Provides a web-based UI for managing Docker containers and monitoring their state.
Docker: Containers isolate services and streamline application deployment.
MongoDB Logs: Logs are collected daily for diagnostics, performance monitoring, and audit trails.
Container Stats: Monitors CPU, memory, and I/O usage for all running containers to detect anomalies.`
  },
  {
    id: 2,
    title: 'Innovative Study Circle DevOps Setup',
    description: `Ongoing project involving the setup of CI/CD pipelines and a complete monitoring stack for the Innovative Study Circle platform. Docker is used for application deployment, Jenkins is being configured for automated builds, and multiple Prometheus exporters are integrated for deep visibility.`,
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    tags: ['Docker', 'Jenkins', 'Prometheus', 'Node Exporter', 'Blackbox Exporter', 'cAdvisor', 'Alertmanager'],
    demoUrl: '',
    repoUrl: 'https://github.com/brrsoftwaressystems',
    category: 'monitoring',
    toolsDescription: `
Docker: Used to containerize and deploy the application consistently across environments.
Jenkins: Configured to automate CI/CD pipelines, improving deployment speed and reducing manual errors.
Node Exporter: Captures Linux system metrics for Prometheus (CPU, memory, disk, etc.).
Blackbox Exporter: Probes HTTP endpoints to verify uptime and service availability.
cAdvisor: Collects and displays container performance metrics (CPU, memory, network).
Alertmanager: Routes alerts from Prometheus and manages notifications to stakeholders.`
  },
  {
    id: 3,
    title: 'DevOps Full Architecture',
    description: 'Complete CI/CD architecture using Jenkins, Docker, AWS, SonarQube, Prometheus, and Grafana. Infrastructure provisioned with Terraform including VPC, EC2, and other AWS services.',
    image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1698226545447/0688e766-fdb0-434d-b1df-86574c1386e1.png?auto=compress,format&format=webp',
    tags: ['Jenkins', 'Docker', 'AWS', 'SonarQube', 'Grafana', 'Prometheus', 'Terraform'],
    demoUrl: '',
    repoUrl: '',
    category: 'infrastructure',
    toolsDescription: `
Jenkins: Automates build/test/deploy pipelines.
Docker: Containerizes applications for portability.
AWS: Cloud infrastructure for hosting, scaling, and security.
SonarQube: Scans code quality and enforces standards.
Grafana: Dashboards for monitoring metrics visually.
Prometheus: Collects and stores monitoring data.
Terraform: Provisioned infrastructure like VPC, EC2, and security groups.`
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showTools, setShowTools] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform">
      <div className="relative group h-48 overflow-hidden cursor-pointer" onClick={() => setShowTools(!showTools)}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
          <div className="space-x-2">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
                <span className="sr-only">Live Demo</span>
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Github size={18} />
                <span className="sr-only">GitHub Repository</span>
              </a>
            )}
          </div>
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {showTools && project.toolsDescription && (
          <div className="bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 p-4 rounded-md whitespace-pre-line">
            {project.toolsDescription}
          </div>
        )}
        {showTools && project.images && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {project.images.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`Project Image ${idx + 1}`}
                className="rounded-lg w-full object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'automation' | 'infrastructure' | 'monitoring' | 'deployment'>('all');

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

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-6 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my DevOps projects, demonstrating my experience with automation, 
            infrastructure management, and monitoring solutions.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {(['all', 'automation', 'infrastructure', 'monitoring', 'deployment'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
