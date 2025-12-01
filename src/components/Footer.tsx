"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <img src="/images/footer-bg.png" alt="" className="bg" />
      <img src="/images/final-cloud.png" alt="" className="cloud1" />
      <img src="/images/final-clou2.png" alt="" className="cloud2" />
      <img src="/images/str.png" alt="" className={`star1 ${isVisible ? 'animate-twinkle' : ''}`} />
      <img src="/images/str.png" alt="" className={`star2 ${isVisible ? 'animate-twinkle' : ''}`} style={{ animationDelay: '0.5s' }} />
      <img src="/images/str.png" alt="" className={`star3 ${isVisible ? 'animate-twinkle' : ''}`} style={{ animationDelay: '1s' }} />
      <img src="/images/str.png" alt="" className={`star4 ${isVisible ? 'animate-twinkle' : ''}`} style={{ animationDelay: '1.5s' }} />
      
      <div className={`stay ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
        <div className="left">
          <img 
            src="/images/stay.png" 
            alt="" 
            className={isVisible ? 'animate-bounce-gentle' : ''}
          />
        </div>
        <div className="right">
          <h2 className={isVisible ? 'animate-text-shimmer' : ''}>Stay Up to Date!</h2>
          <p className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.3s' }}>
            Follow us on social media to stay up to date with all the latest news, memes, and community events. Don&apos;t miss out on a single moment of keeone hoon madness!
          </p>
        </div>
      </div>
      
      <p className={`claim ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        Disclaimer: <br />
        keeone hoon is a memecoin intended for entertainment purposes. It&apos;s not financial advice. Always do your own research before investing in any cryptocurrency. Let&apos;s have fun and keep the spirit of Hulkamania alive!
      </p>
      
      <div className={`links ${isVisible ? '' : ''}`}>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`social-link ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`social-link ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.7s' }}
        >
          <img src="/images/telegram.png" alt="Telegram" />
        </a>
      </div>
      
      <ul className={`copy ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
        <li>Copyright © 2025 keeone hoon . All Rights Reserved</li>
      </ul>
    </footer>
  );
}
