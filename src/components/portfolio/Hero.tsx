import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;

    if (!hero || !title || !subtitle || !buttons) return;

    // GSAP Timeline for hero animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate title with split text effect
    tl.fromTo(title, 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitle,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(buttons.children,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
      stagger: 0.5
    });

  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 floating-element">
        <div className="w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
      </div>
      <div className="absolute top-40 right-20 floating-element">
        <div className="w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-pulse-glow"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 floating-element">
        <div className="w-16 h-16 rounded-full bg-primary-glow/30 blur-lg animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 ref={titleRef} className="text-hero text-gradient mb-6">
            Prasad Gurav
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Software Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            3+ years of experience crafting modern web applications with React, Next.js, and cutting-edge technologies. Based in Pune, MH.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="btn-hero group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-outline-hero group"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          <button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary-glow transition-colors duration-300 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;