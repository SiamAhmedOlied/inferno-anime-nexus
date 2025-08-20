import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-6 text-lg px-4 py-2 hover-neon animate-float">
          🔥 Elite CTF Team
        </Badge>
        
        <h1 className="text-6xl md:text-8xl font-cyber font-black mb-6 text-fire-glow animate-glow">
          SQUAD
        </h1>
        <h1 className="text-6xl md:text-8xl font-cyber font-black mb-8 text-neon-glow animate-glow">
          INFERNOES
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-japanese max-w-2xl mx-auto leading-relaxed">
          情熱と技術で挑戦する • Conquering challenges with passion and skill
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" className="text-lg px-8 py-4 hover-fire pulse-fire">
            View Achievements
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover-neon border-primary">
            Join Our Discord
          </Button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;