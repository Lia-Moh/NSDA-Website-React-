import React from 'react';

export default function Nujum() {
  const videos = [
    { id: "wu2oWKUMjhc", title: "Episode with Omar Al-Farooq", topic: "Scalability in the Era of Cloud Native" },
    { id: "nHjT8h-vJgA", title: "Episode with Sarah Amin", topic: "Ethical AI: Building with Barakah" },
    { id: "ltllWogkB6E", title: "Episode with Khalid Ebrahim", topic: "NUJUM-AL-CODE EP05 (Season One)" }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="nujum" style={{ backgroundColor: '#013463' }}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white">Nujum al-Code</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">Deep technical dives with industry pioneers from NSDA Community.</p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#DDA23A' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {videos.map((video) => (
            <div key={video.id} className="relative rounded-xl overflow-hidden shadow-2xl bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&showinfo=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-3 md:p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <h4 className="text-white font-bold text-xs md:text-sm mb-1 line-clamp-1">{video.topic}</h4>
                <p className="text-white/50 text-[11px] md:text-xs">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://youtube.com/@NSDA_Community" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 font-bold uppercase tracking-wide transition-all hover:scale-105 text-sm md:text-base"
            style={{ backgroundColor: '#DDA23A', color: '#013463', borderRadius: '9999px', textDecoration: 'none' }}
          >
            <i className="fab fa-youtube"></i> Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}