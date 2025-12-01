"use client";

import { useEffect, useRef, useState } from "react";

export default function HowToBuy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      text: "First things first, you need a krypto wallet that suports memecoins on Monad. We recomend MetaMask or Trust Walet for the best experince. Make sure to add Monad network! Its easy i promis.",
      delay: "0.2s"
    },
    {
      text: "You need MON tokens to swap for keeone hoon. You can get MON by bridging from Ethereum or buying on popular exchanges like Binance or Coinbas. Connect Your Wallet to the Monad network. Very importent step!",
      delay: "0.4s"
    },
    {
      text: "Head over to a Monad DEX and conect your walet. It's safe and easy, brothr! Swap MON for keeone hoon. I tested this myself and only lost money twice (was user error).",
      delay: "0.6s"
    },
    {
      text: "Search for keeone hoon and swap your MON for the hottest memecoin in the game. It's that simpel! Join the keeone hoon Comunity & join the debate! We argue about blockchain stuff but mostly just post memes.",
      delay: "0.8s"
    }
  ];

  return (
    <section className="htb" ref={sectionRef}>
      <h2 className={isVisible ? 'animate-wave-text' : 'opacity-0'}>
        How to Buy keeone hoon?
      </h2>
      <img 
        src="/images/cloud-2.png" 
        alt="" 
        className={`cloud-2 ${isVisible ? 'animate-float-cloud' : ''}`} 
      />
      <img 
        src="/images/cloud-3.png" 
        alt="" 
        className={`cloud-3 ${isVisible ? 'animate-float-cloud-reverse' : ''}`}
      />
      <img 
        src="/images/htb-img.png" 
        alt="" 
        className={`htb-img ${isVisible ? 'animate-character-entrance' : 'opacity-0'}`}
      />
      
      {steps.map((step, index) => (
        <div 
          key={index}
          className={`box box-${index + 1} ${isVisible ? 'animate-step-reveal' : 'opacity-0'}`}
          style={{ animationDelay: step.delay }}
        >
          <p>{step.text}</p>
        </div>
      ))}
    </section>
  );
}
