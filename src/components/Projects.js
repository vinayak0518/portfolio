import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitBranch, Calendar } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample projects data (replace with actual GitHub API integration)
  const sampleProjects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      html_url: 'https://github.com/vinayak0518/E-Commerce',
      homepage: 'https://e-commerce-qewi.vercel.app/',
      stargazers_count: 45,
      forks_count: 12,
      language: 'JavaScript',
      topics: ['react', 'nodejs', 'mongodb', 'ecommerce'],
      created_at: '2023-06-15T10:30:00Z',
      updated_at: '2024-01-20T14:45:00Z',
    },
    {
      id: 2,
      name: 'To-Do List App',
      description: 'A collaborative task management application with real-time updates.',
      html_url: 'https://github.com/vinayak0518/todo',
      homepage: 'https://vinayak0518.github.io/todo/',
      stargazers_count: 32,
      forks_count: 8,
      language: 'JavaScript',
      topics: ['react', 'javascript' ],
      created_at: '2023-08-10T09:15:00Z',
      updated_at: '2024-01-15T11:20:00Z',
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and contact form integration.',
      html_url: 'https://github.com/yourusername/portfolio',
      homepage: 'https://your-portfolio.vercel.app',
      stargazers_count: 28,
      forks_count: 15,
      language: 'JavaScript',
      topics: ['react', 'tailwindcss', 'portfolio', 'responsive'],
      created_at: '2023-09-05T16:20:00Z',
      updated_at: '2024-01-18T13:30:00Z',
    },
    {
      id: 4,
      name: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API and Chart.js for data visualization.',
      html_url: 'https://github.com/vinayak0518/WEATHER-APP',
      homepage: 'https://vinayak0518.github.io/WEATHER-APP/',
      stargazers_count: 19,
      forks_count: 6,
      language: 'JavaScript',
      topics: ['react', 'api', 'weather', 'charts'],
      created_at: '2023-07-20T12:45:00Z',
      updated_at: '2024-01-10T10:15:00Z',
    },
    
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Simulate API call with sample data
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProjects(sampleProjects);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Function to get language color
  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-600',
      'Python': 'bg-blue-500',
      'React': 'bg-cyan-500',
      'Next.js': 'bg-gray-800',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-pink-500',
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and contributions to the developer community.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and contributions to the developer community.
          </p>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image/Header */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <Github className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Language and Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                    <span className="text-sm text-gray-600">{project.language}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch size={14} />
                      <span>{project.forks_count}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.slice(0, 3).map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="skill-badge text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                  {project.topics.length > 3 && (
                    <span className="skill-badge text-xs">
                      +{project.topics.length - 3} more
                    </span>
                  )}
                </div>

                {/* Dates */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>Updated {formatDate(project.updated_at)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary flex items-center justify-center space-x-2 text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary flex items-center justify-center space-x-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        {/* <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">GitHub Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {projects.reduce((sum, p) => sum + p.stargazers_count, 0)}
              </div>
              <p className="text-gray-600">Total Stars</p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-secondary-600 mb-2">
                {projects.reduce((sum, p) => sum + p.forks_count, 0)}
              </div>
              <p className="text-gray-600">Total Forks</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.length}
              </div>
              <p className="text-gray-600">Projects</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(projects.flatMap(p => p.topics)).size}
              </div>
              <p className="text-gray-600">Technologies</p>
            </div>
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-lg text-gray-600 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/vinayak0518"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 