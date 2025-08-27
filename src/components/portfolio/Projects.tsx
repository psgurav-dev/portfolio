import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "BeWatcher - Movie Ticket Booking",
      description: "A full-stack web application for browsing and booking movie tickets online. Built with modern technologies to streamline the movie ticket booking experience.",
      technologies: ["Next.js", "MongoDB", "Node.js", "React.js", "TypeScript"],
      features: [
        "User authentication and profile management",
        "Movie browsing with detailed information",
        "Seat selection and booking system",
        "Payment integration",
        "Responsive design for all devices"
      ],
      status: "Live",
      liveUrl: "#", // Replace with actual URL
      githubUrl: "#", // Replace with actual URL if available
      image: "🎬",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Wexen Interior - Portfolio Website",
      description: "A sleek and interactive portfolio site for an interior design company, featuring smooth animations and immersive scrolling with a stunning UI.",
      technologies: ["Next.js", "GSAP", "Locomotive Scroll", "TailwindCSS", "TypeScript"],
      features: [
        "Smooth scroll animations with Locomotive Scroll",
        "Interactive GSAP animations",
        "Responsive portfolio gallery",
        "Modern design with attention to detail",
        "Optimized performance and SEO"
      ],
      status: "Live",
      liveUrl: "#", // Replace with actual URL
      githubUrl: "#", // Replace with actual URL if available
      image: "🏠",
      gradient: "from-blue-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const projects = projectsRef.current;

    if (!section || !projects) return;

    // Animate project cards
    const projectCards = projects.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0, 
          y: 100,
          rotationX: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for project cards
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card card-glow group">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`text-4xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium mt-2">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  className="btn-hero flex-1 group/btn"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                  View Live
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="btn-outline-hero group/btn"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-elegant max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              🚀 More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly working on new projects and exploring innovative solutions. 
              Check back regularly to see my latest work, or get in touch to discuss potential collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;