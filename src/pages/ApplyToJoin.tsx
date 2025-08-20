import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Shield, Code, Lock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ApplyToJoin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    experience: '',
    specialties: '',
    motivation: '',
    achievements: ''
  });

  const requirements = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Knowledge",
      description: "Strong foundation in cybersecurity principles and practices"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills", 
      description: "Proficiency in programming languages and security tools"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "CTF Experience",
      description: "Previous participation in CTF competitions or similar challenges"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Team Spirit",
      description: "Ability to collaborate effectively and share knowledge"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration would go here
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Application Submitted! 🔥",
        description: "We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        discord: '',
        experience: '',
        specialties: '',
        motivation: '',
        achievements: ''
      });

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
            🚀 Join The Squad
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-cyber font-bold mb-6 text-fire-glow animate-glow">
            Apply to Join
          </h1>
          <h1 className="text-5xl md:text-6xl font-cyber font-bold mb-8 text-neon-glow animate-glow">
            Squad-Infernoes
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-japanese leading-relaxed">
            Ready to join the elite? We're looking for passionate hackers who can keep up with the inferno.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-fire-glow">
            What We're Looking For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <Card 
                key={index}
                className={`card-cyber hover-fire animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                  <div className="text-primary mr-4">
                    {req.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-cyber">
                      {req.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-japanese">
                    {req.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <Card className="card-cyber border-gradient animate-zoom-in">
          <CardHeader>
            <CardTitle className="text-2xl font-cyber text-neon-glow text-center">
              Application Form
            </CardTitle>
            <CardDescription className="text-center font-japanese">
              Fill out the form below to submit your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-cyber">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-cyber">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="discord" className="font-cyber">Discord Username</Label>
                <Input
                  id="discord"
                  name="discord"
                  value={formData.discord}
                  onChange={handleInputChange}
                  placeholder="username#1234"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="font-cyber">CTF/Security Experience *</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Describe your experience with CTFs, security research, or related fields..."
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialties" className="font-cyber">Technical Specialties *</Label>
                <Textarea
                  id="specialties"
                  name="specialties"
                  value={formData.specialties}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  placeholder="Web security, reverse engineering, cryptography, pwn, forensics, etc."
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="achievements" className="font-cyber">Notable Achievements</Label>
                <Textarea
                  id="achievements"
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="CTF placements, bug bounties, security research, publications, etc."
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation" className="font-cyber">Why Squad-Infernoes? *</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="What motivates you to join our team? What can you contribute?"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  variant="default" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="text-lg px-12 py-4 hover-fire pulse-fire"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application 🔥"}
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4 font-japanese">
                  We review all applications carefully and will respond within 1-2 weeks.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyToJoin;