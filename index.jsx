import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Shield, Code, LineChart, 
  Terminal, GraduationCap, Plane, Calendar, ChevronRight,
  ExternalLink, Download, User, Briefcase, Globe
} from 'lucide-react';

const translations = {
  en: {
    nav: ['Home', 'About', 'Experience', 'Skills', 'Education'],
    heroBadge: 'Targeting Cyber Security Opportunities',
    heroHi: "Hi, I'm",
    heroDesc1: "Cybersecurity Specialist",
    heroDesc2: " bridging the gap between robust IT security operations, code-level technical expertise, and strategic business goals.",
    btnTouch: "Get in Touch",
    btnLi: "Connect on LinkedIn",
    location: "Westerstede, Germany",
    aboutTitle: "About Me",
    aboutP1: "I am a dedicated cybersecurity professional with a unique advantage: a deep understanding of how software is built and how businesses operate. Currently pursuing my M.Sc. in Cyber Security Management, my career spans IT security operations, software engineering, and business development.",
    aboutP2: "This multi-disciplinary background enables me to approach security not just as a technical necessity, but as a strategic enabler. Having assessed critical security warnings at the Federal IT Center (ITZBund) and contributed to complex software architectures for major health insurers, I know how to implement robust, practical security measures that align with fast-paced business objectives.",
    hobbies: ['Travel', 'Gaming', 'Festivals', 'Event Coordination', 'Tabletop Games'],
    expTitle: "Professional Experience",
    jobs: [
      {
        title: "Master@IBM Business Development",
        date: "Sep 2024 - Present",
        company: "IBM Technology Lifecycle Services, Hamburg",
        desc: "Provide essential support to the sales team with key operational tasks. Actively involved in strategic business development activities, conducting market analysis to identify new opportunities, and generating qualified leads to expand the client base."
      },
      {
        title: "Information Security Analyst",
        date: "Aug 2023 - Sep 2024",
        company: "ITZBund (Federal IT Center), Hannover",
        desc: "Worked in Information and Incident Management. Assessed security warnings relevance and monitored implementation of security measures. Exchanged information with clients/supervisory authorities, participated in vulnerability management committees, and optimized internal documentation."
      },
      {
        title: "Full-stack Developer",
        date: "Mar 2020 - Dec 2022",
        company: "T-Systems Multimedia Solutions (Deutsche Telekom AG), Hamburg",
        desc: "Responsible for the end-to-end software development of web applications for a major health insurance company. Scope covered the entire lifecycle: initial planning, architecture modeling, implementation, development, and testing."
      },
      {
        title: "Operations Controller",
        date: "Sep 2019 - Feb 2020",
        company: "Deutsche Telekom AG, Hamburg",
        desc: "Coordinated technician deployments within Operations Control for Technical Infrastructure. Monitored and calculated key performance indicators (KPIs) to ensure operational efficiency and service quality."
      }
    ],
    skillsTitle: "Core Competencies",
    secTitle: "IT Security",
    secSkills: ["Security Operations", "Incident Management", "Vulnerability Mgmt.", "Threat Analysis", "Compliance Monitoring"],
    devTitle: "Development",
    devSkills: ["Full-Stack Development", "Web Applications", "Software Architecture", "Secure Coding Practices", "Agile Lifecycles"],
    bizTitle: "Business & Ops",
    bizSkills: ["Business Development", "Sales Operations", "Market Analysis", "KPI Monitoring", "Lead Generation"],
    langTitle: "Languages",
    langs: [
      { name: "German", level: "Native" },
      { name: "English", level: "C2" },
      { name: "Spanish", level: "Basic" },
      { name: "Japanese", level: "Basic" }
    ],
    eduTitle: "Education & Certs",
    edu1Date: "Sep 2024 - Present",
    edu1Title: "M.Sc. Cyber Security Management",
    edu1Org: "FOM University for Applied Sciences, Hamburg",
    edu2Date: "Sep 2019 - Dec 2022",
    edu2Title: "B.Sc. Business Information Systems",
    edu2Org: "FOM University for Applied Sciences, Hamburg",
    cert1Title: "Fundamentals of Cybersecurity",
    cert2Title: "English Certification C2",
    globalTitle: "Global Perspective",
    globalQuote: '"I believe diverse cultural experiences are fundamental to thriving in global business development and technology."',
    glob1Date: "Jan 2023 - Sep 2024",
    glob1Title: "Southeast Asia Expedition",
    glob1Desc: "Post-Bachelor's travel immersing in diverse cultures and broadening global perspectives.",
    glob2Date: "Oct 2018 - Apr 2019",
    glob2Title: "Oceania Gap Year",
    glob2Desc: "Independent travel across New Zealand & Australia developing adaptability and independence.",
    contactTitle: "Ready to Connect?",
    profileLi: "LinkedIn Profile",
    rights: "All rights reserved."
  },
  de: {
    nav: ['Start', 'Über mich', 'Erfahrung', 'Fähigkeiten', 'Bildung'],
    heroBadge: 'Zielgerichtete Suche nach Cyber Security Positionen',
    heroHi: "Hallo, ich bin",
    heroDesc1: "Cybersecurity-Spezialist",
    heroDesc2: ", der die Brücke zwischen IT-Sicherheitsbetrieb, tiefgreifender technischer Expertise und strategischen Unternehmenszielen schlägt.",
    btnTouch: "Kontakt aufnehmen",
    btnLi: "Auf LinkedIn vernetzen",
    location: "Westerstede, Deutschland",
    aboutTitle: "Über mich",
    aboutP1: "Ich bin ein engagierter Cybersecurity-Experte mit einem einzigartigen Vorteil: einem tiefen Verständnis dafür, wie Software entwickelt wird und wie Unternehmen funktionieren. Aktuell absolviere ich meinen M.Sc. in Cyber Security Management. Mein Werdegang umfasst IT-Security Operations, Software Engineering und Business Development.",
    aboutP2: "Dieser multidisziplinäre Hintergrund ermöglicht es mir, Sicherheit nicht nur als technische Notwendigkeit, sondern als strategischen Wegbereiter zu betrachten. Nachdem ich kritische Sicherheitswarnungen beim ITZBund bewertet und an komplexen Softwarearchitekturen für große Krankenversicherungen mitgewirkt habe, weiß ich, wie man robuste und praxisnahe Sicherheitsmaßnahmen implementiert, die dynamische Unternehmensziele unterstützen.",
    hobbies: ['Reisen', 'Gaming', 'Festivals', 'Eventkoordination', 'Tabletop-Spiele'],
    expTitle: "Berufserfahrung",
    jobs: [
      {
        title: "Master@IBM Business Development",
        date: "Sep 2024 - Heute",
        company: "IBM Technology Lifecycle Services, Hamburg",
        desc: "Unterstützung des Vertriebsteams bei wichtigen operativen Aufgaben. Aktive Beteiligung an strategischen Business-Development-Aktivitäten, Durchführung von Marktanalysen zur Identifizierung neuer Geschäftsmöglichkeiten und Generierung qualifizierter Leads zum Ausbau des Kundenstamms."
      },
      {
        title: "Information Security Analyst",
        date: "Aug 2023 - Sep 2024",
        company: "ITZBund (Informationstechnikzentrum Bund), Hannover",
        desc: "Tätig im Informations- und Vorfallmanagement. Bewertung der Relevanz von Sicherheitswarnungen und Überwachung der Umsetzung von Sicherheitsmaßnahmen. Informationsaustausch mit Kunden und Aufsichtsbehörden, Teilnahme an Gremien zum Schwachstellenmanagement und Optimierung der internen Dokumentation."
      },
      {
        title: "Full-stack Developer",
        date: "Mär 2020 - Dez 2022",
        company: "T-Systems Multimedia Solutions (Deutsche Telekom AG), Hamburg",
        desc: "Verantwortlich für die End-to-End-Softwareentwicklung von Webanwendungen für eine große Krankenkasse. Der Aufgabenbereich umfasste den gesamten Entwicklungszyklus: von der initialen Planung und Architekturmodellierung bis hin zu Implementierung, Entwicklung und Testing."
      },
      {
        title: "Operations Controller",
        date: "Sep 2019 - Feb 2020",
        company: "Deutsche Telekom AG, Hamburg",
        desc: "Koordination von Technikereinsätzen innerhalb der Betriebssteuerung für die Technische Infrastruktur. Überwachung und Berechnung von Key Performance Indicators (KPIs) zur Sicherstellung der operativen Effizienz und Servicequalität."
      }
    ],
    skillsTitle: "Kernkompetenzen",
    secTitle: "IT-Sicherheit",
    secSkills: ["Security Operations", "Incident Management", "Schwachstellenmanagement", "Bedrohungsanalyse", "Compliance-Überwachung"],
    devTitle: "Entwicklung",
    devSkills: ["Full-Stack-Entwicklung", "Webanwendungen", "Softwarearchitektur", "Secure Coding", "Agile Methoden"],
    bizTitle: "Business & Ops",
    bizSkills: ["Business Development", "Sales Operations", "Marktanalysen", "KPI-Überwachung", "Lead-Generierung"],
    langTitle: "Sprachen",
    langs: [
      { name: "Deutsch", level: "Muttersprache" },
      { name: "Englisch", level: "C2" },
      { name: "Spanisch", level: "Grundkenntnisse" },
      { name: "Japanisch", level: "Grundkenntnisse" }
    ],
    eduTitle: "Bildung & Zertifikate",
    edu1Date: "Sep 2024 - Heute",
    edu1Title: "M.Sc. Cyber Security Management",
    edu1Org: "FOM Hochschule, Hamburg",
    edu2Date: "Sep 2019 - Dez 2022",
    edu2Title: "B.Sc. Wirtschaftsinformatik",
    edu2Org: "FOM Hochschule, Hamburg",
    cert1Title: "Grundlagen der Cybersecurity",
    cert2Title: "Englisch-Zertifikat C2",
    globalTitle: "Globale Perspektive",
    globalQuote: '"Ich bin davon überzeugt, dass vielfältige kulturelle Erfahrungen eine essenzielle Grundlage für den Erfolg in der globalen Technologie- und Geschäftsentwicklung sind."',
    glob1Date: "Jan 2023 - Sep 2024",
    glob1Title: "Südostasien Expedition",
    glob1Desc: "Reisen nach dem Bachelorabschluss, um in diverse Kulturen einzutauchen und globale Perspektiven zu erweitern.",
    glob2Date: "Okt 2018 - Apr 2019",
    glob2Title: "Ozeanien Gap Year",
    glob2Desc: "Unabhängiges Reisen durch Neuseeland und Australien zur Förderung von Anpassungsfähigkeit und Eigenständigkeit.",
    contactTitle: "Bereit zur Vernetzung?",
    profileLi: "LinkedIn Profil",
    rights: "Alle Rechte vorbehalten."
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('en');

  // Simple scroll spy to update active navigation tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = translations[lang];
  const sectionIds = ['home', 'about', 'experience', 'skills', 'education'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-tighter text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>R<span className="text-cyan-400">.</span>Ebken</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollTo(sectionIds[index])}
                  className={`${
                    activeSection === sectionIds[index]
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white'
                  } transition-colors px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <button 
                onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-sm text-slate-300 transition-all"
                title="Toggle Language"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{lang === 'en' ? 'DE' : 'EN'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {t.heroBadge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              {t.heroHi} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ron Ebken</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-light text-slate-400 mb-8 max-w-3xl leading-relaxed">
              <span className="text-white font-medium">{t.heroDesc1}</span>{t.heroDesc2}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
              >
                {t.btnTouch} <ChevronRight className="w-4 h-4" />
              </button>
              <a 
                href="https://www.linkedin.com/in/ron-ebken-18772423b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700 flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5" /> {t.btnLi}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-500" /> {t.location}</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-500" /> ron.ebken@proton.me</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-500" /> +49 173 510 5665</div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-cyan-400" /> {t.aboutTitle}
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {t.aboutP1}
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {t.aboutP2}
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {t.hobbies.map(hobby => (
                    <span key={hobby} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-slate-700 group">
                  {/* Subtle color overlay that disappears on hover */}
                  <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  
                  {/* Temporary placeholder for the live preview. Change src to "ron_ebken.jpg" when you download the code! */}
                  <img 
                    src="ron_ebken.jpg" 
                    alt="Ron Ebken (Placeholder)" 
                    className="w-full h-auto object-cover aspect-[4/5] object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  
                  {/* Fade gradient at the bottom to blend into the section */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-cyan-400" /> {t.expTitle}
            </h2>

            <div className="relative border-l border-slate-700 ml-3 md:ml-4">
              
              {/* Job 1 */}
              <div className="mb-12 ml-8 relative group">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-900 rounded-full -left-12 ring-4 ring-slate-950 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                  <LineChart className="w-4 h-4 text-cyan-400" />
                </span>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{t.jobs[0].title}</h3>
                  <span className="text-sm font-mono text-cyan-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {t.jobs[0].date}
                  </span>
                </div>
                <h4 className="text-lg text-slate-400 mb-4 font-medium">{t.jobs[0].company}</h4>
                <p className="text-slate-300 leading-relaxed">{t.jobs[0].desc}</p>
              </div>

              {/* Job 2 */}
              <div className="mb-12 ml-8 relative group">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-900 rounded-full -left-12 ring-4 ring-slate-950 border border-slate-600 group-hover:border-cyan-400 transition-colors">
                  <Shield className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                </span>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{t.jobs[1].title}</h3>
                  <span className="text-sm font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {t.jobs[1].date}
                  </span>
                </div>
                <h4 className="text-lg text-slate-400 mb-4 font-medium">{t.jobs[1].company}</h4>
                <p className="text-slate-300 leading-relaxed">{t.jobs[1].desc}</p>
              </div>

              {/* Job 3 */}
              <div className="mb-12 ml-8 relative group">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-900 rounded-full -left-12 ring-4 ring-slate-950 border border-slate-600 group-hover:border-cyan-400 transition-colors">
                  <Code className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                </span>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{t.jobs[2].title}</h3>
                  <span className="text-sm font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {t.jobs[2].date}
                  </span>
                </div>
                <h4 className="text-lg text-slate-400 mb-4 font-medium">{t.jobs[2].company}</h4>
                <p className="text-slate-300 leading-relaxed">{t.jobs[2].desc}</p>
              </div>

              {/* Job 4 */}
              <div className="ml-8 relative group">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-900 rounded-full -left-12 ring-4 ring-slate-950 border border-slate-600 group-hover:border-cyan-400 transition-colors">
                  <Terminal className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                </span>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{t.jobs[3].title}</h3>
                  <span className="text-sm font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {t.jobs[3].date}
                  </span>
                </div>
                <h4 className="text-lg text-slate-400 mb-4 font-medium">{t.jobs[3].company}</h4>
                <p className="text-slate-300 leading-relaxed">{t.jobs[3].desc}</p>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.skillsTitle}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Skill Card 1 - Cybersecurity */}
              <div className="bg-slate-900 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] rounded-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield className="w-24 h-24 text-cyan-400" />
                </div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{t.secTitle}</h3>
                <ul className="space-y-3 relative z-10">
                  {t.secSkills.map(skill => (
                    <li key={skill} className="flex items-center text-slate-200 font-medium"><ChevronRight className="w-4 h-4 text-cyan-500 mr-2" /> {skill}</li>
                  ))}
                </ul>
              </div>

              {/* Skill Card 2 - Development */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-colors group">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.devTitle}</h3>
                <ul className="space-y-3">
                  {t.devSkills.map(skill => (
                    <li key={skill} className="flex items-center text-slate-300"><ChevronRight className="w-4 h-4 text-teal-500 mr-2" /> {skill}</li>
                  ))}
                </ul>
              </div>

              {/* Skill Card 3 - Business */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LineChart className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.bizTitle}</h3>
                <ul className="space-y-3">
                  {t.bizSkills.map(skill => (
                    <li key={skill} className="flex items-center text-slate-300"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> {skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-white mb-6">{t.langTitle}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {t.langs.map(l => (
                   <span key={l.name} className="px-6 py-2 bg-slate-800 rounded-full border border-slate-700 text-white font-medium">
                     {l.name} <span className="text-cyan-500 ml-2">{l.level}</span>
                   </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & TRAVEL */}
        <section id="education" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Education Side */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-cyan-400" /> {t.eduTitle}
                </h2>
                <div className="space-y-6">
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <div className="text-sm text-cyan-400 mb-1">{t.edu1Date}</div>
                    <h3 className="text-lg font-bold text-white">{t.edu1Title}</h3>
                    <p className="text-slate-400">{t.edu1Org}</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                    <div className="text-sm text-slate-400 mb-1">{t.edu2Date}</div>
                    <h3 className="text-lg font-bold text-white">{t.edu2Title}</h3>
                    <p className="text-slate-400">{t.edu2Org}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-center">
                      <div className="text-xs text-slate-400 mb-1">Apr 2025</div>
                      <div className="font-medium text-white text-sm">{t.cert1Title}</div>
                      <div className="text-xs text-cyan-400">Codecademy</div>
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-center">
                      <div className="text-xs text-slate-400 mb-1">Feb 2025</div>
                      <div className="font-medium text-white text-sm">{t.cert2Title}</div>
                      <div className="text-xs text-cyan-400">EF SET</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel / Global Perspective */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-cyan-400" /> {t.globalTitle}
                </h2>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-xl h-full flex flex-col justify-center">
                  <p className="text-slate-300 leading-relaxed mb-8 italic">
                    {t.globalQuote}
                  </p>
                  
                  <div className="relative border-l-2 border-slate-700 ml-2 space-y-8">
                    <div className="relative pl-6">
                      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900" />
                      <div className="text-sm font-mono text-cyan-400 mb-1">{t.glob1Date}</div>
                      <h4 className="text-white font-medium">{t.glob1Title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{t.glob1Desc}</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-3 h-3 bg-slate-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900" />
                      <div className="text-sm font-mono text-slate-400 mb-1">{t.glob2Date}</div>
                      <h4 className="text-white font-medium">{t.glob2Title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{t.glob2Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{t.contactTitle}</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:ron.ebken@proton.me" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-lg">
              <Mail className="w-5 h-5" /> ron.ebken@proton.me
            </a>
            <a href="tel:+491735105665" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-lg">
              <Phone className="w-5 h-5" /> +49 173 510 5665
            </a>
            <a href="https://www.linkedin.com/in/ron-ebken-18772423b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-lg">
              <Linkedin className="w-5 h-5" /> {t.profileLi}
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Ron Ebken. {t.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}