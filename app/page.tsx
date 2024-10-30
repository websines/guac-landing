import GuacHero from "@/components/HeroSection";
import GuacNavbar from "@/components/Navbar";
import GuacSocial from "@/components/SocialLinks";
// import GuacTokenomics from "@/components/Tokenomics";
import GuacRoadmap from "@/components/Roadmap";
import GuacAbout from "@/components/AboutSection";
import GuacFAQ from "@/components/FAQSection";
import GuacFooter from "@/components/Footer";
import GuacChatbot from "@/components/chatbot/Chatbot";
export default function Home() {
  return (
    <>
      <GuacNavbar />
      <GuacHero />
      <GuacSocial />
      {/* <GuacTokenomics /> */}
      <GuacRoadmap />
      <GuacAbout />
      <GuacFAQ />
      <GuacChatbot />
      <GuacFooter />
    </>
  );
}
