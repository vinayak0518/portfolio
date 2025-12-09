# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and EmailJS. Perfect for developers looking to showcase their skills, projects, and experience.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**: About, Skills, Projects, and Contact
- **GitHub Integration**: Dynamic project fetching (ready for API integration)
- **EmailJS Integration**: Contact form with email functionality
- **AOS Animations**: Smooth scroll animations
- **Resume Download**: Easy resume download functionality
- **SEO Optimized**: Meta tags and structured content
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **AOS** - Animate On Scroll library
- **EmailJS** - Email service integration
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information

Update the following files with your information:

#### 1. Hero Section (`src/components/Hero.js`)
```javascript
// Update these values
const name = "Your Name";
const role = "Full Stack Developer";
const description = "Your personal description";
const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "your.email@example.com"
};
```

#### 2. About Section (`src/components/About.js`)
```javascript
const personalInfo = [
  { icon: User, label: 'Name', value: 'Your Name' },
  { icon: MapPin, label: 'Location', value: 'Your City, Country' },
  // ... update other fields
];

const experience = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    period: '2023 - Present',
    description: 'Your job description'
  }
  // ... add more experience
];
```

#### 3. Skills Section (`src/components/Skills.js`)
```javascript
const skills = {
  frontend: [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    // ... update your skills
  ],
  // ... other categories
};
```

#### 4. Projects Section (`src/components/Projects.js`)
```javascript
// Replace sampleProjects with your actual projects
// Or integrate with GitHub API for dynamic fetching
```

#### 5. Contact Section (`src/components/Contact.js`)
```javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  }
  // ... update contact information
];
```

### Styling Customization

#### Colors (`tailwind.config.js`)
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Update your primary color scheme
        50: '#eff6ff',
        100: '#dbeafe',
        // ... other shades
      },
      secondary: {
        // Update your secondary color scheme
      }
    }
  }
}
```

#### Custom CSS (`src/index.css`)
Add your custom styles and animations here.

## 📧 EmailJS Setup

1. **Sign up for EmailJS**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and verify your email

2. **Create Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Get your Service ID

3. **Create Email Template**
   - Create a template for contact form emails
   - Get your Template ID

4. **Get User ID**
   - Find your User ID in the EmailJS dashboard

5. **Update Contact Component**
   ```javascript
   // In src/components/Contact.js
   import emailjs from 'emailjs-com';
   
   // Initialize EmailJS
   emailjs.init('YOUR_USER_ID');
   
   // Update the handleSubmit function
   const handleSubmit = async (e) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           from_name: formData.name,
           from_email: formData.email,
           subject: formData.subject,
           message: formData.message,
         }
       );
       setSubmitStatus('success');
     } catch (error) {
       setSubmitStatus('error');
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. Deploy: `npm run deploy`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── resume.pdf (add your resume)
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Implement lazy loading for images
3. **Code Splitting**: Use React.lazy() for component splitting
4. **Minimize Bundle**: Remove unused dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [EmailJS](https://www.emailjs.com/) for email functionality

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:

- Open an issue on GitHub
- Contact me at your.email@example.com
- Check the documentation above

---

**Happy Coding! 🚀** 