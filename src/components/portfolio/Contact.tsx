import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    // {
    //   icon: Mail,
    //   label: "Email",
    //   value: "psgurav2001@gmail.com",
    //   href: "mailto:psgurav2001@gmail.com",
    //   gradient: "from-blue-500 to-cyan-500"
    // },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+91 87",
    //   href: "tel:+919561242048",
    //   gradient: "from-green-500 to-emerald-500"
    // },
    // {
    //   icon: MapPin,
    //   label: "Location",
    //   value: "Pune, Maharashtra",
    //   href: "https://maps.google.com/?q=Pune,Maharashtra",
    //   gradient: "from-purple-500 to-pink-500"
    // }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/psgurav04/",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/psgurav04", // Update with actual GitHub
      gradient: "from-gray-600 to-gray-400"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://www.psgurav.in",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    // Animate contact cards
    const contactCards = cards.querySelectorAll('.contact-card');
    
    gsap.fromTo(contactCards,
      { 
        opacity: 0, 
        y: 60,
        scale: 0.9,
        rotationY: 45
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate social links
    const socialElements = section.querySelectorAll('.social-link');
    gsap.fromTo(socialElements,
      { 
        opacity: 0, 
        scale: 0,
        rotation: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
          Let's Connect
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.label === "Location" ? "_blank" : "_self"}
              rel={info.label === "Location" ? "noopener noreferrer" : ""}
              className="contact-card card-glow group block"
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors duration-300">
                  {info.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            Find Me Online
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${link.gradient} text-white hover:scale-110 hover:shadow-glow transition-all duration-300 group`}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 group-hover:animate-bounce" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="card-glow text-center">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Ready to Work Together?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-hero group"
              onClick={() => window.location.href = 'mailto:psgurav2001@gmail.com?subject=Let\'s Work Together'}
            >
              <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Send Email
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-outline-hero group"
              onClick={() => window.open('https://linkedin.com/in/psgurav04/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2024 Rasad Gurav. Built with React, Next.js, and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;