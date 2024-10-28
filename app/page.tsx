import GuacHero from "@/components/HeroSection";
import GuacNavbar from "@/components/Navbar";
import GuacSocial from "@/components/SocialLinks";
import GuacTokenomics from "@/components/Tokenomics";
import GuacAbout from "@/components/AboutSection";
import GuacFAQ from "@/components/FAQSection";
import GuacFooter from "@/components/Footer";
export default function Home() {
  return (
    <>
      <GuacNavbar />
      <GuacHero />
      <GuacSocial />
      <GuacTokenomics />
      <GuacAbout />
      <GuacFAQ />
      <GuacFooter />
    </>
  );
}
