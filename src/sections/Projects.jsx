import React from 'react';

export default function Projects() {
  const projects = [
    { tech: "Python / Telegram", title: "Nejm Ask Bot", description: "A sophisticated knowledge-base bot for student inquiries and community management.", icon: "fab fa-telegram" },
    { tech: "Node.js", title: "Prayer Times API", description: "High-performance microservice providing accurate calculation methods globally.", icon: "fas fa-cloud-moon" },
    { tech: "React", title: "Quran Study App", description: "Cross-platform application for structured study and tafsir tracking.", icon: "fas fa-book-quran" },
    { tech: "Automation / Python", title: "Daily Quran Automation", description: "Automated daily delivery of Quranic verses, tafsir, and supplications to your messaging app.", icon: "fas fa-robot" }
  ];

  return (
    <section className="py-16 md:py-24 relative" id="projects" style={{ backgroundColor: 'var(--cloud-break)' }}>
      <div className="container mx-auto px-4 md:px-6"> {/* Reduced padding */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: 'var(--prussian-blue)' }}>Open Source Ecosystem</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">We build tools that solve problems within the community while following modern engineering best practices.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} 
                 className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-5 md:p-6 group">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2 md:px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(1, 52, 99, 0.1)', color: 'var(--prussian-blue)' }}>{project.tech}</span>
                <i className={`${project.icon} text-xl md:text-2xl transition-colors duration-300 group-hover:text-[#DDA23A]`} style={{ color: 'var(--gold)' }}></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--prussian-blue)' }}>{project.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}