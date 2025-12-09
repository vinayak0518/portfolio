import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#projects' },
        { name: 'UI/UX Design', href: '#skills' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resume', href: '/resume.pdf' },
        { name: 'GitHub', href: 'https://github.com/vinayak0518' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/t-vinayak/' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vinayak0518', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/t-vinayak/', icon: '💼' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">Tandle Vinayak</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A passionate developer dedicated to creating innovative web solutions 
              and helping businesses grow through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        {/* <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Subscribe to my newsletter for the latest updates on projects, 
              tech insights, and development tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>
                © {currentYear} Tandle Vinayak. All rights reserved. Made with{' '}
                <Heart className="inline w-4 h-4 text-red-500" />
                {' '}using React & Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {/* <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a> */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 hover:text-white transition-colors duration-300"
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer; 