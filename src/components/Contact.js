import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
// Replace with your actual EmailJS Public Key from https://www.emailjs.com
emailjs.init('bsOXaK9TYBFNLSHbs');

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 't.vinayak9492@gmail.com',
      link: 'mailto:t.vinayak9492@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '7893486308',
      link: 'tel:7893486308'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Your City, Country',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vinayak0518',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/t-vinayak/',
      icon: '💼'
    },
    
   
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS IDs
      await emailjs.sendForm(
        'service_inqq9wd',      // Replace with your Service ID from EmailJS
        'template_bm7jdnf',     // Replace with your Template ID from EmailJS
        formRef.current,
        'bsOXaK9TYBFNLSHbs'       // Replace with your Public Key from EmailJS
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-medium text-gray-900 hover:text-primary-600 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Let's Work Together</h4>
              <p className="text-gray-600 mb-4">
                I'm currently available for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Full-time positions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Freelance projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Open source contributions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Technical consulting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {submitStatus && (
                <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="font-medium">
                    {submitStatus === 'success' 
                      ? 'Message sent successfully! I\'ll get back to you soon.' 
                      : 'Failed to send message. Please try again.'
                    }
                  </span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Form Note */}
            {/* <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This form is currently using a simulation. To enable actual email sending, 
                you'll need to set up EmailJS with your service credentials.
              </p>
            </div> */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Start a Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:t.vinayak9492@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a
              href="tel:7893486308"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 