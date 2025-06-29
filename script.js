document.addEventListener('DOMContentLoaded', () => {
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

    populatePage(resumeData);
    setupEventListeners();
    setupScrollAnimations();
});

function populatePage(data) {
    // Hero & About
    document.getElementById('summary').textContent = data.summary;

    // Experience
    const experienceList = document.getElementById('experience-list');
    data.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item relative pl-10 pb-8 animate-slide-up';
        item.innerHTML = `
            <div class="card p-6 rounded-lg">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h3 class="font-display text-lg font-bold text-light">${exp.title}</h3>
                        <p class="text-primary font-semibold">${exp.company}</p>
                        <p class="text-slate-400 text-sm">${exp.location}</p>
                    </div>
                    <span class="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">${exp.period}</span>
                </div>
                <p class="text-slate-400 text-sm mb-4">${exp.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${exp.technologies.map(tech => `<span class="bg-slate-800 text-primary text-xs font-mono px-2 py-1 rounded">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        experienceList.appendChild(item);
    });

    // Education
    const educationList = document.getElementById('education-list');
    data.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'card p-6 rounded-lg animate-slide-up';
        item.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="font-display text-lg font-bold text-light">${edu.title}</h3>
                    <p class="text-secondary font-semibold">${edu.institution}</p>
                </div>
                <span class="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">${edu.period}</span>
            </div>
            <p class="text-slate-400 text-sm">${edu.description}</p>
        `;
        educationList.appendChild(item);
    });

    // Skills
    const technicalSkills = document.getElementById('technical-skills');
    data.skills.technicalSkills.forEach(skill => {
        const el = document.createElement('span');
        el.className = 'bg-slate-800 text-primary text-sm font-medium px-3 py-1 rounded';
        el.textContent = skill;
        technicalSkills.appendChild(el);
    });

    const softSkills = document.getElementById('soft-skills');
    data.skills.softSkills.forEach(skill => {
        const el = document.createElement('div');
        el.className = 'flex items-center text-slate-300';
        el.innerHTML = `<i class="fas fa-check-circle text-secondary mr-2"></i> ${skill}`;
        softSkills.appendChild(el);
    });

    const languages = document.getElementById('languages');
    Object.entries(data.skills.languages).forEach(([lang, level]) => {
        const el = document.createElement('div');
        el.innerHTML = `
            <p class="font-semibold text-slate-300">${lang}</p>
            <p class="text-sm text-slate-400">${level}</p>
        `;
        languages.appendChild(el);
    });
}

function setupEventListeners() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark/70', 'backdrop-blur-lg');
        } else {
            navbar.classList.remove('bg-dark/70', 'backdrop-blur-lg');
        }
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-slide-up').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}