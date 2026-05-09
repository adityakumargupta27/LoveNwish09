import { useState } from 'react';
import { Image, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    caption: "Class 6D's most talented artist 🖌️", 
    rotation: "-1.5deg" 
  },
];

const GalleryTab = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openPhoto = (index: number) => setSelectedPhoto(index);
  const closePhoto = () => setSelectedPhoto(null);
  const nextPhoto = () => setSelectedPhoto(prev => prev !== null ? (prev + 1) % photos.length : null);
  const prevPhoto = () => setSelectedPhoto(prev => prev !== null ? (prev - 1 + photos.length) % photos.length : null);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-paper-warm border-2 border-pencil/10 flex items-center justify-center rotate-3">
          <span className="text-3xl">📸</span>
        </div>
        <h2 className="font-handwritten text-5xl md:text-6xl text-charcoal mb-2">
          The Art Gallery
        </h2>
        <p className="text-graphite font-sketch text-base">
          A collection of the most beautiful artwork — and that's you! 🎨
        </p>
      </div>

      {/* Photo grid — polaroid style */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 120}ms` }}
            onClick={() => openPhoto(index)}
          >
            <div 
              className="bg-white p-3 pb-14 rounded-sm shadow-lg hover:shadow-xl transition-all duration-400 relative"
              style={{ 
                transform: `rotate(${photo.rotation})`,
                boxShadow: '2px 3px 15px hsl(30 10% 30% / 0.12), 0 0 0 1px hsl(30 20% 88%)',
              }}
            >
              {/* Washi tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-sketch-gold/40 rounded-sm z-10"
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
              
              {/* Caption — handwritten style */}
              <div className="absolute bottom-2 left-3 right-3">
                <p className="font-handwritten text-lg text-charcoal/80 text-center leading-tight">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Extra "sketch" card */}
        <div className="animate-scale-in" style={{ animationDelay: `${photos.length * 120}ms` }}>
          <div 
            className="bg-paper-warm p-3 pb-14 rounded-sm shadow-md border-2 border-dashed border-pencil/20 relative h-full flex items-center justify-center min-h-[200px]"
            style={{ transform: 'rotate(1deg)' }}
          >
            <div className="text-center p-4">
              <span className="text-4xl block mb-2">🖌️</span>
              <p className="font-handwritten text-xl text-graphite">
                Space for your next masterpiece...
              </p>
            </div>
            <div className="absolute bottom-2 left-3 right-3">
              <p className="font-handwritten text-base text-pencil-light text-center">
                Keep creating! ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Special message */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-3 bg-card/90 backdrop-blur-sm rounded-xl px-8 py-4 card-shadow border border-pencil/10" 
             style={{ transform: 'rotate(-0.5deg)' }}>
          <span className="text-xl">✏️</span>
          <p className="font-handwritten text-2xl text-charcoal">
            Every picture tells a story, and yours is beautiful
          </p>
          <span className="text-xl">🎨</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md" onClick={closePhoto}>
          <div className="relative max-w-2xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              onClick={closePhoto}
              className="absolute -top-12 right-0 p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Polaroid frame */}
            <div className="bg-white p-4 pb-20 rounded-sm shadow-2xl" style={{ transform: 'rotate(-1deg)' }}>
              <img 
                src={photos[selectedPhoto].src} 
                alt={photos[selectedPhoto].caption}
                className="w-full max-h-[70vh] object-contain rounded-sm"
              />
              <div className="absolute bottom-4 left-6 right-6">
                <p className="font-handwritten text-2xl text-charcoal text-center">
                  {photos[selectedPhoto].caption}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
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

            {/* Photo counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
              <p className="font-sketch text-white/70 text-sm">
                {selectedPhoto + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTab;
