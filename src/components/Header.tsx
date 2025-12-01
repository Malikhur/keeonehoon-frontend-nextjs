"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [loaded, setLoaded] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([]);

  useEffect(() => {
    setLoaded(true);
    
    // Create sparkles
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section className="header">
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay
          }}
        />
      ))}
      
      <nav>
        <div className={`logo ${loaded ? 'animate-bounce-in' : 'opacity-0'}`}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="social-icons">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`social-icon ${loaded ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`social-icon ${loaded ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <img src="/images/telegram.png" alt="Telegram" />
          </a>
        </div>
      </nav>
      
      <img 
        src="/images/barbie-heading.png" 
        className={`header-heading ${loaded ? 'animate-zoom-in-bounce' : 'opacity-0'}`}
        style={{ animationDelay: '0.4s' }}
        alt="Keeone Hoon" 
      />
      
      <a href="#" className={`buy-btn ${loaded ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
        <img src="/images/buy-btn.png" alt="Buy Now" />
      </a>
      
      <img 
        src="/images/character-1.png" 
        alt="Character" 
        className={`character-1 ${loaded ? 'animate-float-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.6s' }}
      />
    </section>
  );
}
