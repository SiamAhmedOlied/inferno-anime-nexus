import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Code, Target } from "lucide-react";

const TeamSection = () => {
  const specialties = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Web Security",
      description: "Masters of finding and exploiting web vulnerabilities",
      color: "text-primary"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Reverse Engineering",
      description: "Deconstructing binaries and understanding complex systems",
      color: "text-secondary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cryptography",
      description: "Breaking codes and securing communications",
      color: "text-accent"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pwn & Exploitation",
      description: "Memory corruption and system exploitation experts",
      color: "text-primary-glow"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-primary">
            🚀 Team Overview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-fire-glow">
            Elite Cyber Warriors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-japanese leading-relaxed">
            We are Squad-Infernoes, a passionate team of cybersecurity enthusiasts who live for the thrill of 
            Capture The Flag competitions. Our diverse skill sets and relentless determination make us a 
            formidable force in the CTF arena.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specialties.map((specialty, index) => (
            <Card key={index} className="card-cyber hover-fire group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className={`${specialty.color} mb-4 flex justify-center group-hover:animate-pulse`}>
                  {specialty.icon}
                </div>
                <CardTitle className="text-xl font-cyber text-foreground">
                  {specialty.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground font-japanese">
                  {specialty.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="card-cyber hover-neon border-gradient">
          <CardHeader>
            <CardTitle className="text-2xl font-cyber text-center text-neon-glow">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground font-japanese leading-relaxed max-w-4xl mx-auto">
              To push the boundaries of cybersecurity knowledge through competitive hacking, continuous learning, 
              and sharing our expertise with the community. We believe that through collaboration and friendly 
              competition, we can make the digital world more secure for everyone.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;