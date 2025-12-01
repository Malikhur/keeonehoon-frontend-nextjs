"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutToken() {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          if (entry.target === imagesRef.current && entry.isIntersecting) {
            setImagesVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (imagesRef.current) observer.observe(imagesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="about" ref={aboutRef}>
        <img 
          src="/images/star-groups.png" 
          className={`star-groups ${isVisible ? 'animate-spin-slow' : 'opacity-0'}`} 
          alt="Stars" 
        />
        <h2 className={`about-title ${isVisible ? 'animate-text-reveal' : 'opacity-0'}`}>
          About the Token
        </h2>
        <div className={`about-content ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <p className={isVisible ? 'animate-typewriter' : ''}>
            Welcom to the Monad Ekosystem. Build faster than evry1 else becuz we got 
            paralel exekution or somthing. I inveted this while eting ramen and thinking 
            about how to make blokchains go brrrrr. Trust me am founder. Very smart. 
            Much teknology. The future of decentralized things that move fast. 
            Number go up guaranted (not finanshul advice tho)
          </p>
          <img src="/images/cloud.png" alt="" className="cloud" />
          <img src="/images/cloud-1.png" alt="" className="cloud-1" />
        </div>
      </section>

      {/* Images Section */}
      <section className="images" ref={imagesRef}>
        <div className="images-wrap">
          <div className={`left ${imagesVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <img 
              src="/images/about-left.png" 
              alt="About" 
              className={imagesVisible ? 'animate-tilt-in' : ''}
              style={{ animationDelay: '0.2s' }}
            />
            <div className={`text-box ${imagesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <p>
                Keeon Hon, founder of Monad, is leading the next generation of high-performance blockchain systems. His vision is shaping the future of scalable, ultra-fast decentralized computing.
              </p>
            </div>
          </div>
          <div className={`right ${imagesVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <img 
              src="/images/mobile-gif.gif" 
              alt="GIF" 
              className={imagesVisible ? 'animate-pulse-glow' : ''}
            />
          </div>
        </div>
        <h2 className={`section-title ${imagesVisible ? 'animate-bounce-text' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          Why Choose keeone hoon ?
        </h2>
      </section>
    </>
  );
}
