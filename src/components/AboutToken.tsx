"use client";

export default function AboutToken() {
  return (
    <>
      {/* About Section */}
      <section className="about">
        <img src="/images/star-groups.png" className="star-groups" alt="Stars" />
        <h2>About the Token</h2>
        <div className="about-content">
          <p>
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
      <section className="images">
        <div className="images-wrap">
          <div className="left">
            <img src="/images/about-left.png" alt="About" />
            <div className="text-box">
              <p>
                Keeon Hon, founder of Monad, is leading the next generation of high-performance blockchain systems. His vision is shaping the future of scalable, ultra-fast decentralized computing.
              </p>
            </div>
          </div>
          <div className="right">
            <img src="/images/mobile-gif.gif" alt="GIF" />
          </div>
        </div>
        <h2>Why Choose keeone hoon ?</h2>
      </section>
    </>
  );
}
