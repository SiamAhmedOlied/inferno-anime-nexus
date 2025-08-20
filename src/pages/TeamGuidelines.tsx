import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Trophy, Code, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamGuidelines = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration First",
      description: "We succeed together. Share knowledge, support teammates, and celebrate collective victories."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excellence in Everything", 
      description: "Strive for mastery in your craft. Push boundaries and never settle for 'good enough'."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "The security landscape evolves daily. Stay curious, keep learning, and adapt constantly."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Respect & Integrity",
      description: "Treat everyone with respect. Use your skills ethically and represent the team with honor."
    }
  ];

  const guidelines = [
    {
      category: "Team Communication",
      rules: [
        "Use Discord as our primary communication platform",
        "Be respectful and constructive in all interactions", 
        "Share discoveries and learning resources with the team",
        "Participate actively in team discussions and planning",
        "Use appropriate channels for different types of communication"
      ]
    },
    {
      category: "Competition Standards",
      rules: [
        "Always compete fairly and within the rules",
        "Document your solutions and share techniques with teammates",
        "Support teammates during competitions - no one fights alone",
        "Represent Squad-Infernoes with professionalism",
        "Learn from both victories and defeats"
      ]
    },
    {
      category: "Skill Development", 
      rules: [
        "Dedicate time regularly to improving your security skills",
        "Specialize in your strong areas while maintaining broad knowledge",
        "Share knowledge through writeups, tutorials, or presentations",
        "Mentor newer members and learn from experienced ones",
        "Stay updated with the latest security trends and tools"
      ]
    },
    {
      category: "Team Responsibilities",
      rules: [
        "Commit to team activities and competitions when possible",
        "Contribute to team resources, tools, and infrastructure", 
        "Help with recruitment and evaluation of new members",
        "Maintain the team's reputation in the CTF community",
        "Support team decisions and leadership structure"
      ]
    }
  ];

  const expectations = [
    {
      level: "New Members (月 - Tsuki)",
      requirements: [
        "Complete onboarding process within first month",
        "Participate in at least 2 CTF competitions",
        "Contribute to team knowledge base",
        "Demonstrate proficiency in at least one security domain"
      ]
    },
    {
      level: "Active Members (星 - Hoshi)", 
      requirements: [
        "Regular participation in team competitions and activities",
        "Mentor new members and share expertise",
        "Contribute to team tools and infrastructure",
        "Maintain high performance standards"
      ]
    },
    {
      level: "Core Members (炎 - Honoo)",
      requirements: [
        "Leadership in competitions and team initiatives", 
        "Represent the team at major events",
        "Drive strategic decisions and team direction",
        "Exceptional skill level and consistent performance"
      ]
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
            📋 Team Guidelines
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-cyber font-bold mb-6 text-fire-glow animate-glow">
            Squad-Infernoes
          </h1>
          <h1 className="text-5xl md:text-6xl font-cyber font-bold mb-8 text-neon-glow animate-glow">
            Code of Honor
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-japanese leading-relaxed">
            Our principles, standards, and expectations that forge legends from hackers.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-fire-glow">
            🔥 Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card 
                key={index}
                className={`card-cyber hover-fire animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-cyber text-neon-glow">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-japanese text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="mb-20">
          <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-neon-glow">
            ⚡ Team Guidelines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((section, index) => (
              <Card 
                key={index}
                className={`card-cyber border-gradient hover-neon animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-cyber text-fire-glow">
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground font-japanese text-sm">
                          {rule}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Member Expectations */}
        <div className="mb-20">
          <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-fire-glow">
            🌟 Member Expectations
          </h2>
          
          <div className="space-y-8">
            {expectations.map((level, index) => (
              <Card 
                key={index}
                className={`card-cyber hover-fire animate-zoom-in max-w-4xl mx-auto`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-cyber text-center">
                    <span className="text-neon-glow">{level.level}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {level.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start">
                        <span className="text-primary mr-2">✦</span>
                        <span className="text-muted-foreground font-japanese text-sm">
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="card-cyber border-gradient text-center animate-bounce-in">
          <CardHeader>
            <CardTitle className="text-3xl font-cyber text-fire-glow">
              Ready to Uphold the Code?
            </CardTitle>
            <CardDescription className="text-lg font-japanese">
              Join the ranks of elite hackers who live by these principles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground font-japanese max-w-2xl mx-auto">
              These guidelines aren't just rules - they're the foundation of our legendary status. 
              Every member who embraces these values becomes part of something greater than themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg" 
                onClick={() => navigate('/apply')}
                className="hover-fire pulse-fire"
              >
                Apply to Join 🔥
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/hall-of-fame')}
                className="hover-neon border-secondary"
              >
                See Our Legends
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamGuidelines;