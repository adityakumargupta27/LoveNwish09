import { useEffect, useCallback } from 'react';
import FloatingDecorations from './FloatingDecorations';
import HeroSection from './sections/HeroSection';
import Class6DSection from './sections/Class6DSection';
import TheArtistSection from './sections/TheArtistSection';
import ThatPhaseSection from './sections/ThatPhaseSection';
import GallerySection from './sections/GallerySection';
import RandomMemoriesSection from './sections/RandomMemoriesSection';
import WhyYouMatterSection from './sections/WhyYouMatterSection';
import BirthdayMessageSection from './sections/BirthdayMessageSection';

const ScrollExperience = () => {
  // Intersection observer for scroll-reveal animations
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: '-5% 0px -5% 0px',
    });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div className="min-h-screen paper-gradient relative">
      <FloatingDecorations />

      {/* Sections — scroll-based storytelling */}
      <HeroSection />
      <Class6DSection />
      <TheArtistSection />
      <ThatPhaseSection />
      <GallerySection />
      <RandomMemoriesSection />
      <WhyYouMatterSection />
      <BirthdayMessageSection />

      {/* Footer */}
      <footer className="py-8 text-center bg-paper-warm/50">
        <p className="text-graphite/40 font-sketch text-sm">
          sketched with ✏️ for Divya
        </p>
      </footer>
    </div>
  );
};

export default ScrollExperience;
