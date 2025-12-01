"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const boxes = [
    {
      num: 1,
      title: "1. Low Tax! 0% buy tax & sell tax",
      text: "We beleev in giving powar to the peeple. With low tax on evry tranzaction, you keep almost evry penny of your hard-erned money. No gimmiks, just gains! I lerned this from watching my dad's tax returms.",
      delay: "0s"
    },
    {
      num: 2,
      title: "2. Community Driven",
      text: "Just like the millons of investers out there, our communiti is the bakbone of keeone hoon. We're all about unity, brothr! Join us and be part of the most entertaning and vibrant krypto comunity out there! We have Discord and i check it sometimes when im not bisy.",
      delay: "0.15s"
    },
    {
      num: 3,
      title: "3. Epic Memes",
      text: "Keeone hoon is all about having fun and braking the mold. Our memes are legandary, and our spirit is unbeetable. We're here to dominate the memecoin game, one laff at a time! I personally aprove all memes (not realy but sounds cool).",
      delay: "0.3s"
    },
    {
      num: 4,
      title: "keeone hoon debatable goodness!",
      text: "Join Keeone Hon on his mishun to enginear the fastest blokchain of tommorow. Paralel exekution means we do lot of things at same time. Very efishent. Much wow. The future is here and it spells things rong on purpose.",
      delay: "0.45s"
    }
  ];

  return (
    <section className="choose" ref={sectionRef}>
      {boxes.map((box, index) => (
        <div 
          key={index}
          className={`box box-${index + 1} ${isVisible ? 'animate-pop-in' : 'opacity-0'}`}
          style={{ animationDelay: box.delay }}
        >
          <p>
            <strong className={isVisible ? 'animate-highlight' : ''} style={{ animationDelay: `calc(${box.delay} + 0.3s)` }}>
              {box.title}
            </strong>
            <br />
            {box.text}
          </p>
        </div>
      ))}
    </section>
  );
}
