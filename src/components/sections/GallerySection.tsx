import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { 
    src: "/photos/photo1.jpg", 
    caption: "That smile that can light up any room ✨", 
    rotation: "-2deg" 
  },
  { 
    src: "/photos/photo2.png", 
    caption: "The most beautiful soul I know 🌟", 
    rotation: "1.5deg" 
  },
  { 
    src: "/photos/photo3.png", 
    caption: "Always creating, always inspiring 🎨", 
    rotation: "-1deg" 
  },
  { 
    src: "/photos/photo4.jpg", 
    caption: "Flowers for the flower girl 🌸", 
    rotation: "2deg" 
  },
  { 
    src: "/photos/photo5.jpg", 
    caption: "The most talented artist, no debate 🖌️", 
    rotation: "-1.5deg" 
  },
];

const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openPhoto = (index: number) => setSelectedPhoto(index);
  const closePhoto = () => setSelectedPhoto(null);
  const nextPhoto = () => setSelectedPhoto(prev => prev !== null ? (prev + 1) % photos.length : null);
  const prevPhoto = () => setSelectedPhoto(prev => prev !== null ? (prev - 1 + photos.length) % photos.length : null);

  return (
    <section 
      id="gallery" 
      data-section="gallery"
      className="py-24 md:py-32 px-4 relative bg-paper-warm/30 overflow-hidden"
    >
      {/* Background doodles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" viewBox="0 0 1200 900">
        <circle cx="100" cy="100" r="50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="5 7" />
        <circle cx="1100" cy="200" r="35" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M600 50 Q 620 30, 640 50 Q 660 70, 680 50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M50 700 L60 690 L70 700 L60 710Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M1100 750 L1110 740 L1120 750 L1110 760Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M200 400 L210 395 M210 400 L200 395" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M1000 500 L1010 495 M1010 500 L1000 495" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-watercolor-amber/20 border border-pencil/10 rounded-full px-4 py-1.5 mb-4">
            <span className="font-sketch text-sm text-graphite">📸 Some Photos</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-7xl text-charcoal mb-3">
            The Gallery
          </h2>
          <p className="font-sketch text-lg text-graphite/60">
            Every picture tells a story, and yours is beautiful
          </p>
        </div>

        {/* Photo grid — polaroid style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="scroll-reveal group cursor-pointer"
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => openPhoto(index)}
            >
              <div 
                className="bg-white p-3 pb-16 rounded-sm shadow-md hover:shadow-xl transition-all duration-400 relative"
                style={{ 
                  transform: `rotate(${photo.rotation})`,
                  boxShadow: '2px 3px 15px hsl(30 10% 30% / 0.1), 0 0 0 1px hsl(30 20% 88%)',
                }}
              >
                {/* Washi tape */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-sketch-gold/30 rounded-sm z-10"
                     style={{ transform: `translateX(-50%) rotate(${(Math.random() * 8 - 4)}deg)` }} />
                
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-paper-warm">
                  <img 
                    src={photo.src} 
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-handwritten text-base text-charcoal/70 text-center leading-tight">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Extra sketch card */}
          <div className="scroll-reveal" style={{ transitionDelay: `${photos.length * 80}ms` }}>
            <div 
              className="bg-paper-warm p-3 pb-16 rounded-sm shadow-md border-2 border-dashed border-pencil/15 relative h-full flex items-center justify-center min-h-[200px]"
              style={{ transform: 'rotate(1deg)' }}
            >
              <div className="text-center p-4">
                <span className="text-4xl block mb-2">🖌️</span>
                <p className="font-handwritten text-lg text-graphite">
                  Space for your next masterpiece...
                </p>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-handwritten text-sm text-pencil-light text-center">
                  Keep creating! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md" onClick={closePhoto}>
          <div className="relative max-w-2xl w-full animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closePhoto}
              className="absolute -top-12 right-0 p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-white p-4 pb-20 rounded-sm shadow-2xl" style={{ transform: 'rotate(-1deg)' }}>
              <img 
                src={photos[selectedPhoto].src} 
                alt={photos[selectedPhoto].caption}
                className="w-full max-h-[70vh] object-contain rounded-sm"
              />
              <div className="absolute bottom-4 left-6 right-6">
                <p className="font-handwritten text-xl text-charcoal text-center">
                  {photos[selectedPhoto].caption}
                </p>
              </div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
              <p className="font-sketch text-white/70 text-sm">
                {selectedPhoto + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
