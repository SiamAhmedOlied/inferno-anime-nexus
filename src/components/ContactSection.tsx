import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Github, Twitter, Mail, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "Discord",
      description: "Join our server for real-time discussions",
      handle: "Squad-Infernoes#1337",
      color: "hover:text-indigo-400",
      bgColor: "hover:bg-indigo-500/10",
      url: "https://discord.gg/squad-infernoes"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      description: "Check out our writeups and tools",
      handle: "@squad-infernoes",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-500/10",
      url: "https://github.com/squad-infernoes"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      description: "Follow our CTF journey and updates",
      handle: "@SquadInfernoes",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
      url: "https://twitter.com/SquadInfernoes"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      description: "Get in touch for collaborations",
      handle: "team@squad-infernoes.dev",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/10",
      url: "mailto:team@squad-infernoes.dev"
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration would go here
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Message Sent! 🔥",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setContactForm({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Send Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-accent animate-bounce-in">
            🌐 Connect With Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 text-fire-glow animate-glow">
            Join The Inferno
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-japanese leading-relaxed">
            Ready to collaborate, learn, or just chat about cybersecurity? 
            We're always excited to connect with fellow hackers and security enthusiasts.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <Card 
              key={index} 
              className={`card-cyber hover-fire group cursor-pointer transition-all duration-300 ${link.bgColor} animate-slide-in-left`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleSocialClick(link.url)}
            >
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

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="card-cyber border-gradient animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-cyber text-neon-glow">
                Send Us a Message
              </CardTitle>
              <CardDescription className="font-japanese">
                Have a question or want to get in touch? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="font-cyber">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="font-cyber">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="font-cyber">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full hover-fire pulse-fire"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="card-cyber border-gradient text-center animate-slide-in-right">
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
              <div className="flex flex-col gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  onClick={() => navigate('/apply')}
                  className="hover-fire pulse-fire animate-bounce-in"
                >
                  Apply to Join 🔥
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => navigate('/guidelines')}
                  className="hover-neon border-secondary animate-bounce-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  View Team Guidelines
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={() => navigate('/hall-of-fame')}
                  className="hover-neon animate-bounce-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  Hall of Fame
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;