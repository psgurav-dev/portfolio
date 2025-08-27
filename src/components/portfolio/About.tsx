import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // GSAP ScrollTrigger animation
    gsap.fromTo(content.children,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            About Me
          </h2>
          
          <div className="card-elegant text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Software Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a Software Developer with 3+ years of experience building scalable web applications and dynamic UIs using React.js, Next.js, and Django. Passionate about crafting seamless user experiences, I bring strong expertise in both frontend and backend development with hands-on experience across diverse projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glow">
              <h4 className="text-xl font-semibold mb-4 text-primary">
                🎯 What I Do
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">▸</span>
                  Build responsive web applications with React.js & Next.js
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▸</span>
                  Develop scalable backend systems with Django & Node.js
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▸</span>
                  Create seamless user experiences with modern UI/UX practices
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▸</span>
                  Optimize performance and ensure cross-browser compatibility
                </li>
              </ul>
            </div>

            <div className="card-glow">
              <h4 className="text-xl font-semibold mb-4 text-primary">
                💡 My Approach
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying updated with the latest 
                technologies. My experience spans from refining existing applications to building 
                complex systems from scratch, always with a focus on user-centric design and 
                optimal performance.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                📍 <span>Pune, Maharashtra</span>
              </span>
              <span className="flex items-center gap-2">
                📧 <span>psgurav2001@gmail.com</span>
              </span>
              {/* <span className="flex items-center gap-2">
                📱 <span>+91 9561242048</span>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;