"use client";

export default function Header() {
  return (
    <section className="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/telegram.png" alt="Telegram" />
          </a>
        </div>
      </nav>
      <img src="/images/barbie-heading.png" className="header-heading" alt="Keeone Hoon" />
      <a href="#">
        <img src="/images/buy-btn.png" alt="Buy Now" />
      </a>
      <img src="/images/character-1.png" alt="Character" className="character-1" />
    </section>
  );
}
