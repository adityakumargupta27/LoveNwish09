import { Music, Star, ExternalLink } from 'lucide-react';

const songs = [
  { title: "You've Got a Friend in Me", artist: "Randy Newman", emoji: "🎨" },
  { title: "Count on Me", artist: "Bruno Mars", emoji: "⭐" },
  { title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", emoji: "✨" },
  { title: "Perfect", artist: "Ed Sheeran", emoji: "🎵" },
  { title: "Here Comes the Sun", artist: "The Beatles", emoji: "☀️" },
  { title: "Lean on Me", artist: "Bill Withers", emoji: "💫" },
  { title: "Photograph", artist: "Ed Sheeran", emoji: "📸" },
  { title: "Happy", artist: "Pharrell Williams", emoji: "🎉" },
];

const MusicTab = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-paper-warm border-2 border-pencil/10 flex items-center justify-center -rotate-3">
          <Music className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-handwritten text-5xl md:text-6xl text-charcoal mb-2">
          Our Friendship Playlist
        </h2>
        <p className="text-graphite font-sketch text-base">
          Songs that remind me of our amazing friendship 🎵
        </p>
      </div>

      <div className="space-y-3">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-card/80 backdrop-blur-sm rounded-xl p-4 md:p-5 card-shadow border border-pencil/8 hover:scale-[1.02] hover:-rotate-[0.5deg] transition-all duration-300 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-center gap-4">
              {/* Song emoji */}
              <div className="w-12 h-12 rounded-xl bg-paper-warm border border-pencil/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {song.emoji}
              </div>
              
              {/* Song info */}
              <div className="flex-1">
                <h3 className="font-sketch text-foreground text-lg">
                  {song.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {song.artist}
                </p>
              </div>

              {/* Star indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Star className="w-5 h-5 text-sketch-gold" fill="currentColor" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-8 text-center">
        <p className="text-graphite font-sketch text-base mb-4">
          Every friendship has a soundtrack ✨
        </p>
        <div className="bg-paper-warm/60 rounded-xl p-4 border border-pencil/8 inline-block -rotate-1">
          <p className="font-handwritten text-2xl text-charcoal">
            🎧 Press play & think of the good times!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicTab;
