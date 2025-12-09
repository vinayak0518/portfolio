import React, { useState } from 'react';
import { Code, Database, Palette, Cloud } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'tools', name: 'Tools', icon: Cloud },
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 90, color: 'bg-blue-500' },
      { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
      { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
      // { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', level: 80, color: 'bg-cyan-500' },
      // { name: 'Next.js', level: 70, color: 'bg-gray-800' },
    ],
    backend: [
      { name: 'Node.js', level: 80, color: 'bg-green-500' },
      { name: 'Express.js', level: 75, color: 'bg-gray-600' },
      // { name: 'Python', level: 70, color: 'bg-blue-500' },
      { name: 'MongoDB', level: 65, color: 'bg-green-600' },
      // { name: 'PostgreSQL', level: 60, color: 'bg-blue-700' },
      { name: 'REST APIs', level: 85, color: 'bg-purple-500' },
    ],
    design: [
      { name: 'Figma', level: 75, color: 'bg-purple-500' },
      // { name: 'Adobe XD', level: 70, color: 'bg-pink-500' },
      // { name: 'Photoshop', level: 65, color: 'bg-blue-500' },
      { name: 'UI/UX Design', level: 80, color: 'bg-indigo-500' },
      { name: 'Responsive Design', level: 90, color: 'bg-green-500' },
    ],
   
    tools: [
    { name: 'VS Code', level: 90, color: 'bg-blue-600' },
    { name: 'Git & GitHub', level: 85, color: 'bg-gray-700' },
    { name: 'Postman', level: 80, color: 'bg-orange-600' },
    { name: 'Chrome DevTools', level: 80, color: 'bg-yellow-600' },
    { name: 'Vercel/Netlify', level: 75, color: 'bg-black' },
  ],
   
  };

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Postman', icon: '📮' },
    { name: 'Figma', icon: '🎨' },
    {name: 'Vercel', icon: '🚀' },
    {name:'JSON Formatter', icon: '🔄' },
    { name: 'Canva', icon: '🌍' },
    {name: 'React DevTools', icon: '🧭' },
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-blue-50 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}>
              
                <category.icon size={20} />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" data-aos="fade-up" data-aos-delay="400">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {skillCategories.find(cat => cat.id === activeCategory)?.name} Skills
            </h3>
            <div className="space-y-6">
              {skills[activeCategory]?.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skill Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills[activeCategory]?.slice(0, 6).map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                    <span className="font-medium text-gray-900">{skill.name}</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <p className="text-sm font-medium text-gray-900">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Additional Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Clean Code</h4>
              <p className="text-gray-600">
                Writing maintainable, readable, and well-documented code following best practices.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">API Integration</h4>
              <p className="text-gray-600">
                Seamlessly integrating RESTful APIs and handling data flow between frontend and backend systems..
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance</h4>
              <p className="text-gray-600">
                Optimizing applications for speed, efficiency, and excellent user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 