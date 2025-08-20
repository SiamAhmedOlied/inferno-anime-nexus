import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "1st Place",
      event: "CyberHack CTF 2024",
      points: "4,850 pts",
      rank: "1/247 teams",
      color: "text-yellow-400"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: "2nd Place", 
      event: "DefCon Qualifier",
      points: "3,920 pts",
      rank: "2/189 teams",
      color: "text-gray-300"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "3rd Place",
      event: "PicoCTF Finals",
      points: "3,445 pts", 
      rank: "3/156 teams",
      color: "text-orange-400"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Top 10",
      event: "Google CTF 2024",
      points: "2,890 pts",
      rank: "8/312 teams",
      color: "text-primary"
    }
  ];

  const stats = [
    { number: "47", label: "CTFs Participated", color: "text-primary" },
    { number: "12", label: "1st Place Wins", color: "text-secondary" },
    { number: "89%", label: "Top 10 Rate", color: "text-accent" },
    { number: "2.4k", label: "Total Points", color: "text-primary-glow" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-secondary animate-bounce-in">
            🏆 Hall of Fame
          </Badge>
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-neon-glow animate-glow">
            Battle-Tested Champions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-japanese leading-relaxed">
            Our dedication and skills have earned us recognition across the global CTF community.
            Every challenge conquered makes us stronger.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`card-cyber hover-fire text-center animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className={`text-4xl md:text-5xl font-cyber font-black ${stat.color} mb-2 animate-glow`}>
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground font-japanese font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Achievements */}
        <div>
          <h3 className="text-2xl font-cyber font-bold text-center mb-8 text-fire-glow">
            Recent Competition Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className={`card-cyber hover-neon group animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                  <div className={`${achievement.color} mr-3 group-hover:animate-pulse`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-cyber text-foreground">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="font-japanese">
                      {achievement.event}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-primary font-mono font-bold">
                      {achievement.points}
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {achievement.rank}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;