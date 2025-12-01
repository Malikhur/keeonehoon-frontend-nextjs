"use client";

import { useEffect, useRef, useState } from "react";

export default function FinalThoughts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="final" ref={sectionRef}>
      <img 
        src="/images/final-cloud.png" 
        className={`cloud ${isVisible ? 'animate-cloud-float' : ''}`} 
        alt="" 
      />
      <div className={`left ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
        <h2 className={isVisible ? 'animate-text-glow' : ''} style={{ animationDelay: '0.3s' }}>
          Keeone hoon Final Thoughts
        </h2>
        <p className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.5s' }}>
          So basicly, keeone hoon is the future of Monad and memecoins and probly 
          the entire blokchain industree. We bilieve in comunity, we beleive in fast 
          tranzactions (10,000 TPS or somthing crazy like that), and we beleive in having 
          a good time while doing it. This is not just a token, its a movement. Its a lifestyl. 
          Its paralel exekution but for your portfolio. I spent many years studying 
          computer sience and working on konsensus mekanisms just so i could 
          bring you this memecoin.
        </p>
        <p className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.7s' }}>
          My mom is very proud (she doesnt realy 
          understand what i do but she says im doing great). 
          Join us on this jurney to the moon, or mars, or wherever 
          memecoins go these days. Rember: wen in doubt, zoom out. 
          Wen confused, just buy more keeone hoon. This is the way. 
          DYOR (Do Your Own Reserch) but also trust me bro. 
          Not financial advise. Probly.
        </p>
      </div>
      <div className={`right ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        <img 
          src="/images/final-hulkpng.png" 
          alt="logo" 
          className={isVisible ? 'animate-hero-float' : ''}
        />
      </div>
    </div>
  );
}
