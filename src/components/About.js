import React from 'react';
import { User, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Tandle Vinayak' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad' },
    { icon: Calendar, label: 'Birthday', value: 'May 5, 2002' },
    { icon: GraduationCap, label: 'Degree', value: 'Bachelors in Electronics and Communication' },
  ];

  const experience = [
    
    {
      title: 'React Developer',
      company: 'Startup Company',
      period: 'April-July',
      description: `Iam a dedicated web developer with experience building responsive, full stack web applications. My journey began with a passion for creating intuitive user experiences, which led me to specialize in technologies like React, Node.js, and JavaScript.<br/>
During my internship at a fast-paced startup, I contributed to real-world projects by developing interactive UI components, optimizing frontend performance, and collaborating with cross-functional teams. This hands-on experience helped me understand agile workflows, code versioning, and deployment practices.<br/>
Alongside my internship, I’ve built multiple personal and collaborative projects that demonstrate my ability to solve problems and deliver clean, scalable solutions. I'm always eager to explore new technologies, refine my skills, and contribute to innovative digital products.`
    },
  ];

  const education = [
    {
      degree: 'Bachelors In ECE',
      institution: 'Jb Institute of Engineering and Technology',
      period: '2021 - 2024',
      description: 'Focused on software engineering, algorithms, and web development.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate and dedicated developer with a strong foundation in modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium text-gray-900">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* About Text */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate web developer driven by the thrill of building seamless and impactful digital experiences. My journey began with a strong curiosity for how websites work and grew into a deep interest in full stack development.
                </p>
                <p>
                  I specialize in crafting responsive and dynamic applications using React, Node.js, and other modern web technologies. During my internship at a fast-paced startup, I gained hands-on experience working on real-world projects, collaborating with teams, and delivering production-ready features.
                </p>
                <p>
                  Beyond internships, I’ve built multiple personal projects that reflect my problem-solving mindset and love for clean, maintainable code. I enjoy experimenting with new tools, contributing to open-source, and continuously learning to stay ahead in the ever-evolving tech world.
                </p>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div data-aos="fade-left">
            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-primary-600" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                    <div className="absolute -left-2 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    </div>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: exp.description }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                    <div className="absolute -left-2 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-primary-600 font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Web Development</h4>
              <p className="text-gray-600">Designing and developing scalable web applications using modern frontend and backend technologies.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
  <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
  
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8" />
    </svg>
  </div>
  <h4 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h4>
  <p className="text-gray-600">Crafting clean, responsive UIs with React, HTML, CSS, and JavaScript for seamless user experiences.</p>
</div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
  
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8v.01M7 18v.01" />
    </svg>
  </div>
  <h4 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h4>
  <p className="text-gray-600">Building robust RESTful APIs and server-side logic using Node.js, Express, and database integrations.</p>
</div>
             <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
  
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  </div>
  <h4 className="text-xl font-semibold text-gray-900 mb-2">Database Management</h4>
  <p className="text-gray-600">Designing and managing relational and NoSQL databases like MySQL and MongoDB.</p>
</div>

  <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
    {/* Changed logo to Git branch for Version Control & Deployment */}
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9v6m12-9v12a3 3 0 01-3 3H6" />
    </svg>
  </div>
  <h4 className="text-xl font-semibold text-gray-900 mb-2">Version Control & Deployment</h4>
  <p className="text-gray-600">Using Git, GitHub, and CI/CD tools for code management and deploying apps to cloud platforms.</p>
</div>
</div>
          </div>
          
        </div>
        
     
    </section>
  );
};

export default About;