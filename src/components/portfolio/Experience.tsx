import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Mirana Innovation Pvt Ltd",
      period: "April 2024 - Present",
      location: "Pune, India",
      type: "Current Position",
      achievements: [
        "Refined the Mirana Toys website by addressing UI issues, enhancing responsiveness, and integrating support pages compatible with the app's WebView",
        "Developed a 'Level Map' backend module using Django REST Framework to dynamically calculate and manage user levels based on playtime, drifts, and toy usage metrics",
        "Built an internal customer support web application with React.js and Next.js, featuring an admin panel for tracking and resolving consumer queries efficiently"
      ]
    },
    {
      title: "Web Developer",
      company: "Revvknew Media Pvt Ltd",
      period: "Feb 2022 - April 2023",
      location: "Pune, India",
      type: "Full-time",
      achievements: [
        "Developed a Lead Management System/CRM program using Django Rest Framework as backend and React.js as frontend",
        "Built a highly functional Lead Generation Website leveraging Django and React.js, enabling businesses to seamlessly collect, organize, and manage leads",
        "Created a custom Task Management System for streamlined tracking of employee work, integrating User Authentication and Access Control features"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Dakshabhi It Sol",
      period: "July 2020 - Oct 2021",
      location: "Nepanagar, M.P, India",
      type: "Full-time",
      achievements: [
        "Developed responsive webpages using HTML, CSS, JavaScript and Bootstrap framework",
        "Gained foundational experience in web development and frontend technologies",
        "Collaborated with senior developers to deliver client projects on time"
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    // Animate timeline items
    const timelineItems = timeline.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      gsap.fromTo(item,
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.9 
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate timeline line
    gsap.fromTo('.timeline-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
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
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Professional Experience
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full rounded-full origin-top"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-item flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow animate-pulse-glow z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card-glow">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {exp.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium mb-4">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="card-elegant max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              📈 Career Growth
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Throughout my journey, I've consistently taken on challenging projects and embraced new technologies. 
              My experience ranges from developing responsive websites to building complex full-stack applications, 
              always focusing on delivering high-quality solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;