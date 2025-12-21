import { Music, Heart, ExternalLink } from 'lucide-react';

const songs = [
  { title: "Perfect", artist: "Ed Sheeran", emoji: "💕" },
  { title: "All of Me", artist: "John Legend", emoji: "❤️" },
  { title: "A Thousand Years", artist: "Christina Perri", emoji: "💗" },
  { title: "Thinking Out Loud", artist: "Ed Sheeran", emoji: "💖" },
  { title: "You Are the Reason", artist: "Calum Scott", emoji: "💝" },
  { title: "Can't Help Falling in Love", artist: "Elvis Presley", emoji: "💘" },
];

const MusicTab = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <Music className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          Our Playlist
        </h2>
        <p className="text-muted-foreground font-body">
          Songs that remind me of us 🎵
        </p>
      </div>

      <div className="space-y-4">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 card-shadow hover:scale-[1.02] transition-all duration-300 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              {/* Song number/emoji */}
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {song.emoji}
              </div>
              
              {/* Song info */}
              <div className="flex-1">
                <h3 className="font-body font-semibold text-foreground text-lg">
                  {song.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {song.artist}
                </p>
              </div>

              {/* Play indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-5 h-5 text-primary" fill="currentColor" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground font-body text-sm mb-4">
          Every song tells our story 💕
        </p>
        <div className="flex items-center justify-center gap-2 text-primary text-sm font-body">
          <ExternalLink className="w-4 h-4" />
          <span>Open in Spotify</span>
        </div>
      </div>
    </div>
  );
};

export default MusicTab;
