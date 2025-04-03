
import React from 'react';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  date: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "To-Do List Application",
      description: "A comprehensive task management system with advanced features for organizing and tracking daily tasks.",
      date: "Nov 2024",
      techStack: ["Java", "Swing (GUI)", "MySQL"],
      features: [
        "CRUD operations for task management",
        "Task categorization for better organization",
        "Priority settings for important tasks",
        "Search functionality to find specific tasks",
        "Due date reminders to stay on track"
      ],
      githubUrl: "https://github.com/PrarthanaL05/todo-list-app",
      liveUrl: "#"
    },
    // Placeholder for future projects
    {
      title: "Future Project",
      description: "This is a placeholder for a future project. Check back later for updates on new exciting projects.",
      date: "Coming Soon",
      techStack: ["TBD"],
      features: ["Coming soon"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group h-full flex flex-col"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-portfolio-lightBlue to-portfolio-purple">
                    <Code className="text-white" size={64} />
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-portfolio-purple">+ {project.features.length - 3} more</li>
                    )}
                  </ul>
                </div>
                
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-4 mt-auto">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
