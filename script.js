// Load resume data
const resumeData = {
  "personalInfo": {
    "name": "RAKOTOARISOA ANDRIANINA",
    "title": "SENIOR FULLSTACK DEVELOPER (REACT / NODE.JS)",
    "experience": "7 years",
    "email": "rakotoandrianina@gmail.com",
    "phone": "+261328027776",
    "linkedin": "https://www.linkedin.com/in/andrianina-rakotoarisoa-0b80b2164/",
    "stackoverflow": "https://stackoverflow.com/users/11285149/1pulsif",
    "github": "https://github.com/AndrianinaH/"
  },
  "summary": "A fullstack developer with 7 years of experience, specializing in front-end development using React and back-end architecture with Node.js. This professional has successfully designed and maintained high-performing web and mobile applications in agile environments. Proficient in the modern JavaScript ecosystem, including React, ReactNative, TypeScript, Nest.js, and Express. Committed to product-oriented projects with a focus on user experience and scalability, i stand out for my versatility, rigor, and a passion for good development practices.",
  "experience": [
    {
      "title": "Information Technology Consultant",
      "company": "Novity",
      "location": "Remote - Madagascar - France",
      "period": "Feb 2021 - Today",
      "description": "Developed innovative SaaS solutions that enable industries and equipment manufacturers to accelerate their transition towards a more eco-efficient and connected environment using IoT sensors, a fully customizable low-code interface, and generative AI. Additionally, contributed to the creation of platforms for social data analytics and cryptocurrency investments, utilizing technologies like Node.js, React, and PostgreSQL.",
      "technologies": ["Node.js", "React", "Python", "Django", "PostgreSQL", "IoT", "SaaS", "AI", "Web Development", "Docker", "Cloud"]
    },
    {
      "title": "Fullstack JavaScript Developer",
      "company": "Hairun",
      "location": "Remote - Madagascar - France",
      "period": "June 2019 - Jan 2021",
      "description": "Successfully developed backend and mobile applications for various projects, including a social network, a neobank (https://sapheer.co), a video conferencing app, and secured a GraphQL API managing multiple IoT microservices. Demonstrated expertise in technologies such as NodeJS, ReactNative, and AWS.",
      "technologies": ["NodeJS", "ReactNative", "GraphQL", "Apollo server", "MongoDB", "AWS", "microservices", "API security", "IoT"]
    },
    {
      "title": "Information Technology Consultant (Java)",
      "company": "OCSIF (Organisme de Coordination et de Suivi des Investissements et de leur Financements)",
      "location": "Madagascar",
      "period": "Aug 2018 - May 2019",
      "description": "Developed a comprehensive data consolidation tool for monitoring investments at OCSIF. This tool significantly enhanced the tracking of government projects in Madagascar, utilizing technologies such as Java, Hibernate, Spring, MySQL, Leaflet, and jQuery to optimize performance and usability.",
      "technologies": ["Java", "Hibernate", "Spring", "MySQL", "Leaflet", "jQuery"]
    },
    {
      "title": "Information Technology Consultant (PHP)",
      "company": "USAID",
      "location": "Madagascar",
      "period": "May 2018 - Mar 2019",
      "description": "Successfully developed the Performance Indicator Management System (PIMS) application, which effectively tracks progress towards the outcomes of USAID programs in Madagascar. This innovative tool utilizes PHP and CodeIgniter to manage data efficiently, ensuring that all stakeholders have access to critical performance insights.",
      "technologies": ["PHP", "CodeIgniter", "SQL Server", "application development", "data management"]
    },
    {
      "title": "Junior Web Developer C#",
      "company": "Orange Madagascar",
      "location": "Madagascar",
      "period": "Jun 2017 - Aug 2017",
      "description": "Developed a comprehensive lifecycle management tool for application roles within the Human Resource Management platform (E-RH) at Orange Madagascar, effectively enhancing operational efficiency and user experience through innovative use of technology such as C#, .Net, and MySQL.",
      "technologies": ["C#", ".Net", "AspNet MVC", "Fluent NHibernate", "MySQL"]
    }
  ],
  "education": [
    {
      "title": "Web3 Developer Specializing in Ethereum and Solidity",
      "institution": "Udemy",
      "period": "Jun 2022 - Nov 2022",
      "description": "Achieved a Udemy certification in Ethereum and Solidity, demonstrating expertise in web3 development and smart contract creation. Developed skills in Solidity, blockchain technology, and using Remix for efficient application development, showcasing a commitment to continuous learning and professional growth.",
      "technologies": ["Solidity", "blockchain", "ethereum", "Remix", "web3", "smart contract"]
    },
    {
      "title": "Innovative Technology Specialist in Mobiquity and Big Data Integration",
      "institution": "Université de Nice Sophia Antipolis (UNS)",
      "period": "Oct 2017 - Sep 2019",
      "description": "Education focused on advanced database concepts and infrastructures, mobile information systems, and application development using Kotlin, JAVA, and React. Specialized in project management and Agile design methodologies to integrate ERP systems and enhance business processes through big data and machine learning applications.",
      "technologies": ["Kotlin", "JAVA", "Node.js", "React", "Mobile Development", "Machine Learning", "SQL3", "Agile Project Management", "Embedded Systems"]
    },
    {
      "title": "Software Development Specialist",
      "institution": "IT University (Madagascar)",
      "period": "Sep 2014 - Sep 2017",
      "description": "Achieved 2nd place in the inaugural Inter-University Hackathon organized by TechZara in 2018, demonstrating strong skills in software development and teamwork. This experience enhanced technical proficiency in C#, PHP, JAVA, and Angular, while fostering collaboration in a competitive environment.",
      "technologies": ["Software Development", "C#", "PHP", "JAVA", "Angular", "SCRUM", "GIT", "Application Development", "UML"]
    }
  ],
  "skills": {
    "softSkills": [
      "Team management",
      "Functional product vision",
      "Proactive with suggestions",
      "Adaptability",
      "Strong affinity for UI/UX design",
      "Curiosity in technical challenges"
    ],
    "technicalSkills": [
      "React",
      "Node.js",
      "TypeScript",
      "Deno",
      "Git",
      "REST",
      "GraphQL web development",
      "NestJS",
      "ReactNative",
      "oak.js",
      "AWS",
      "GCP",
      "GitLab CI",
      "GitHub Actions",
      "Docker",
      "CI/CD"
    ],
    "languages": {
      "French": "C1 - fluent, advanced proficiency",
      "English": "B1 - conversational, intermediate proficiency"
    }
  }
};

// DOM Elements
const experienceList = document.getElementById('experience-list');
const educationList = document.getElementById('education-list');
const technicalSkills = document.getElementById('technical-skills');
const softSkills = document.getElementById('soft-skills');
const languages = document.getElementById('languages');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-sm');
    } else {
        navbar.classList.remove('bg-white/95', 'backdrop-blur-sm');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Populate Experience Section
function populateExperience() {
    resumeData.experience.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.className = 'bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 animate-slide-up';
        expElement.style.animationDelay = `${index * 0.1}s`;
        
        expElement.innerHTML = `
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 class="text-xl font-semibold text-gray-800">${exp.title}</h3>
                    <p class="text-blue-600 font-medium">${exp.company}</p>
                    <p class="text-gray-500 text-sm">${exp.location}</p>
                </div>
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">${exp.period}</span>
            </div>
            <p class="text-gray-600 mb-4">${exp.description}</p>
            <div class="flex flex-wrap gap-2">
                ${exp.technologies.map(tech => `
                    <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">${tech}</span>
                `).join('')}
            </div>
        `;
        
        experienceList.appendChild(expElement);
    });
}

// Populate Education Section
function populateEducation() {
    resumeData.education.forEach((edu, index) => {
        const eduElement = document.createElement('div');
        eduElement.className = 'bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 animate-slide-up';
        eduElement.style.animationDelay = `${index * 0.1}s`;
        
        eduElement.innerHTML = `
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 class="text-xl font-semibold text-gray-800">${edu.title}</h3>
                    <p class="text-green-600 font-medium">${edu.institution}</p>
                </div>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">${edu.period}</span>
            </div>
            <p class="text-gray-600 mb-4">${edu.description}</p>
            <div class="flex flex-wrap gap-2">
                ${edu.technologies.map(tech => `
                    <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">${tech}</span>
                `).join('')}
            </div>
        `;
        
        educationList.appendChild(eduElement);
    });
}

// Populate Skills Section
function populateSkills() {
    // Technical Skills
    resumeData.skills.technicalSkills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.className = 'bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium';
        skillElement.textContent = skill;
        technicalSkills.appendChild(skillElement);
    });

    // Soft Skills
    resumeData.skills.softSkills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'flex items-center';
        skillElement.innerHTML = `
            <i class="fas fa-check-circle text-green-500 mr-2"></i>
            <span class="text-gray-700">${skill}</span>
        `;
        softSkills.appendChild(skillElement);
    });

    // Languages
    Object.entries(resumeData.skills.languages).forEach(([lang, level]) => {
        const langElement = document.createElement('div');
        langElement.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <span class="font-medium text-gray-700">${lang}</span>
            </div>
            <p class="text-sm text-gray-500">${level}</p>
        `;
        languages.appendChild(langElement);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
        }
    });
}, observerOptions);

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    populateExperience();
    populateEducation();
    populateSkills();
    
    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 w-full h-1 bg-blue-600 z-50 transform origin-left scale-x-0 transition-transform duration-150';
    progressBar.id = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        progressBar.style.transform = `scaleX(${scrollPercent})`;
    });
}

// Initialize scroll progress
createScrollProgress();