import Header from "@/components/Header";
import AboutToken from "@/components/AboutToken";
import WhyChoose from "@/components/WhyChoose";
import HowToBuy from "@/components/HowToBuy";
import FinalThoughts from "@/components/FinalThoughts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <AboutToken />
      <WhyChoose />
      <HowToBuy />
      <FinalThoughts />
      <Footer />
    </div>
  );
}
