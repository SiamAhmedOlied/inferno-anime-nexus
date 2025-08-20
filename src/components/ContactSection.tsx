import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Github, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "Discord",
      description: "Join our server for real-time discussions",
      handle: "Squad-Infernoes#1337",
      color: "hover:text-indigo-400",
      bgColor: "hover:bg-indigo-500/10"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      description: "Check out our writeups and tools",
      handle: "@squad-infernoes",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-500/10"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      description: "Follow our CTF journey and updates",
      handle: "@SquadInfernoes",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      description: "Get in touch for collaborations",
      handle: "team@squad-infernoes.dev",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/10"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-accent">
            🌐 Connect With Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-fire-glow">
            Join The Inferno
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-japanese leading-relaxed">
            Ready to collaborate, learn, or just chat about cybersecurity? 
            We're always excited to connect with fellow hackers and security enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <Card key={index} className={`card-cyber hover-fire group cursor-pointer transition-all duration-300 ${link.bgColor}`}>
              <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                <div className={`text-muted-foreground mr-4 group-hover:animate-pulse transition-colors ${link.color}`}>
                  {link.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg font-cyber text-foreground">
                    {link.name}
                  </CardTitle>
                  <CardDescription className="font-japanese text-sm">
                    {link.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-mono text-sm">
                  {link.handle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-cyber border-gradient text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-cyber text-neon-glow">
              Ready to Compete?
            </CardTitle>
            <CardDescription className="text-lg font-japanese">
              We're always looking for skilled individuals to join our team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground font-japanese">
              If you're passionate about cybersecurity and have what it takes to compete at the highest level, 
              we'd love to hear from you. Drop us a message and let's see what you can do!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="hover-fire pulse-fire">
                Apply to Join
              </Button>
              <Button variant="outline" size="lg" className="hover-neon border-secondary">
                View Team Guidelines
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;