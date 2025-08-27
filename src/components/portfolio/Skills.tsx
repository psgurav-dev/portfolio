import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: "💻",
      skills: ["JavaScript", "Python", "HTML/CSS", "TypeScript", "Node.js"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: ["React.js", "Next.js", "Django", "Django REST", "Express.js", "TailwindCSS", "Framer", "Bootstrap"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Bitbucket", "AWS", "Jira", "Linux", "Figma"]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRef.current;

    if (!section || !skills) return;

    // Animate skill categories
    gsap.fromTo(skills.children,
      { opacity: 0, y: 50, rotationX: 45 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
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

    // Animate individual skill tags
    const skillTags = section.querySelectorAll('.skill-tag');
    gsap.fromTo(skillTags,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Skills & Technologies
        </h2>
        
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elegant hover:card-glow transition-all duration-500">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag px-3 py-2 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-glow max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              🚀 Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I stay current with the latest web development trends and technologies. 
              Currently exploring advanced React patterns, serverless architectures, and modern DevOps practices 
              to deliver even better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;