import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HallOfFame = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      rank: 1,
      competition: "DEF CON CTF Finals",
      year: "2024",
      position: "3rd Place",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      description: "Secured 3rd place among 300+ international teams",
      points: "15,847 pts"
    },
    {
      rank: 2,
      competition: "PicoCTF 2024",
      year: "2024", 
      position: "1st Place",
      icon: <Medal className="w-8 h-8 text-yellow-400" />,
      description: "Dominated with perfect execution across all categories",
      points: "18,200 pts"
    },
    {
      rank: 3,
      competition: "CyberSecurityRumble",
      year: "2023",
      position: "2nd Place", 
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      description: "Outstanding performance in web exploitation challenges",
      points: "12,156 pts"
    }
  ];

  const legends = [
    {
      name: "火影 (Hokage)",
      role: "Team Captain",
      achievements: "50+ CTF wins, Master of Web Exploitation",
      specialty: "Advanced persistent threats & zero-day discoveries"
    },
    {
      name: "雷神 (Raijin)", 
      role: "Crypto Specialist",
      achievements: "Unbreakable cipher solver, RSA nightmare",
      specialty: "Cryptographic analysis & blockchain security"
    },
    {
      name: "忍者 (Ninja)",
      role: "Stealth Expert", 
      achievements: "Invisible infiltrator, social engineering master",
      specialty: "Network penetration & social engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover-neon"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <Badge variant="outline" className="mb-4 text-lg px-6 py-2 border-accent animate-bounce-in">
            🏆 Hall of Fame
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6 text-fire-glow animate-glow">
            Legends of
          </h1>
          <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-8 text-neon-glow animate-glow">
            Squad-Infernoes
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-japanese">
            Celebrating our greatest victories and the legendary hackers who made them possible
          </p>
        </div>

        {/* Major Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-fire-glow">
            🔥 Competition Victories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`card-cyber hover-fire group cursor-pointer animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:animate-bounce">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-xl font-cyber text-fire-glow">
                    {achievement.position}
                  </CardTitle>
                  <CardDescription className="text-lg font-bold text-foreground">
                    {achievement.competition}
                  </CardDescription>
                  <Badge variant="secondary" className="mx-auto">
                    {achievement.year}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-japanese mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-primary font-mono font-bold">
                    {achievement.points}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Legends */}
        <div>
          <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-neon-glow">
            ⚡ Team Legends
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legends.map((legend, index) => (
              <Card 
                key={index}
                className={`card-cyber border-gradient hover-neon group animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-cyber text-neon-glow group-hover:animate-pulse">
                    {legend.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-bold">
                    {legend.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-japanese">
                    {legend.achievements}
                  </p>
                  <div className="pt-2">
                    <Badge variant="outline" className="text-xs">
                      {legend.specialty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center animate-zoom-in">
          <Card className="card-cyber border-gradient max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-cyber text-fire-glow">
                🔥 Squad Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-cyber font-bold text-neon-glow">127</div>
                  <div className="text-muted-foreground font-japanese">CTFs Won</div>
                </div>
                <div>
                  <div className="text-4xl font-cyber font-bold text-fire-glow">89.2%</div>
                  <div className="text-muted-foreground font-japanese">Win Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-cyber font-bold text-primary">2,847</div>
                  <div className="text-muted-foreground font-japanese">Total Points</div>
                </div>
                <div>
                  <div className="text-4xl font-cyber font-bold text-accent">#3</div>
                  <div className="text-muted-foreground font-japanese">Global Rank</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;