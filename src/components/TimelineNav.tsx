interface TimelineNavProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

const TimelineNav = ({ sections, activeSection, onNavigate }: TimelineNavProps) => {
  return (
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-0">
      {/* Vertical line */}
      <div className="absolute inset-y-0 right-1/2 w-[1px] bg-pencil/15 translate-x-[0.5px]" />
      
      {sections.map((section, i) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className="group relative flex items-center py-3 pr-0 pl-0"
            title={section.label}
          >
            {/* Label */}
            <span className={`absolute right-8 font-sketch text-sm whitespace-nowrap transition-all duration-300 ${
              isActive 
                ? 'opacity-100 translate-x-0 text-charcoal' 
                : 'opacity-0 translate-x-2 text-graphite group-hover:opacity-70 group-hover:translate-x-0'
            }`}>
              {section.label}
            </span>
            
            {/* Dot */}
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 relative z-10 ${
              isActive 
                ? 'bg-sketch-gold border-sketch-gold shadow-[0_0_8px_hsl(42_85%_55%_/_0.4)] scale-125' 
                : 'bg-paper-warm border-pencil/30 group-hover:border-pencil/60 group-hover:scale-110'
            }`} />
          </button>
        );
      })}
    </nav>
  );
};

export default TimelineNav;
