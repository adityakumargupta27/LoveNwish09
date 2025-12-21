import { Image, Heart } from 'lucide-react';

const flowers = [
  { emoji: "🌸", name: "Cherry Blossom" },
  { emoji: "🌹", name: "Rose" },
  { emoji: "🌷", name: "Tulip" },
  { emoji: "🌺", name: "Hibiscus" },
  { emoji: "🌻", name: "Sunflower" },
  { emoji: "💐", name: "Bouquet" },
  { emoji: "🌼", name: "Daisy" },
  { emoji: "🪷", name: "Lotus" },
  { emoji: "🌿", name: "Herb" },
];

const GalleryTab = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <Image className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          A Garden For You
        </h2>
        <p className="text-muted-foreground font-body">
          Beautiful flowers, just like you 🌸
        </p>
      </div>

      {/* Flower grid */}
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="aspect-square bg-card/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center card-shadow hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="text-5xl md:text-6xl lg:text-7xl group-hover:scale-110 transition-transform duration-300">
              {flower.emoji}
            </span>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground font-body opacity-0 group-hover:opacity-100 transition-opacity">
              {flower.name}
            </p>
          </div>
        ))}
      </div>

      {/* Special message */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-3 bg-card/90 backdrop-blur-sm rounded-full px-8 py-4 card-shadow">
          <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          <p className="font-display text-xl text-foreground">
            You're the most beautiful flower in my garden
          </p>
          <Heart className="w-5 h-5 text-primary" fill="currentColor" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="mt-8 flex justify-center gap-4 opacity-50">
        <span className="text-3xl animate-float" style={{ animationDelay: '0s' }}>🦋</span>
        <span className="text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🐝</span>
        <span className="text-3xl animate-float" style={{ animationDelay: '1s' }}>🌈</span>
      </div>
    </div>
  );
};

export default GalleryTab;
