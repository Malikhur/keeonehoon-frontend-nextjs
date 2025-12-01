"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/images/footer-bg.png" alt="" className="bg" />
      <img src="/images/final-cloud.png" alt="" className="cloud1" />
      <img src="/images/final-clou2.png" alt="" className="cloud2" />
      <img src="/images/str.png" alt="" className="star1" />
      <img src="/images/str.png" alt="" className="star2" />
      <img src="/images/str.png" alt="" className="star3" />
      <img src="/images/str.png" alt="" className="star4" />
      <div className="stay">
        <div className="left">
          <img src="/images/stay.png" alt="" />
        </div>
        <div className="right">
          <h2>Stay Up to Date!</h2>
          <p>Follow us on social media to stay up to date with all the latest news, memes, and community events. Don&apos;t miss out on a single moment of keeone hoon madness!</p>
        </div>
      </div>
      <p className="claim">
        Disclaimer: <br />
        keeone hoon is a memecoin intended for entertainment purposes. It&apos;s not financial advice. Always do your own research before investing in any cryptocurrency. Let&apos;s have fun and keep the spirit of Hulkamania alive!
      </p>
      <div className="links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/telegram.png" alt="Telegram" />
        </a>
      </div>
      <ul className="copy">
        <li>Copyright © 2025 keeone hoon . All Rights Reserved</li>
      </ul>
    </footer>
  );
}
