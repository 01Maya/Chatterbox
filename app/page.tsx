import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Goals from "@/components/Goals";
import Steps from "@/components/Steps";
import Stories from "@/components/Stories";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Reveal>
          <Goals />
        </Reveal>
        <Reveal delay={80}>
          <Steps />
        </Reveal>
        <Reveal delay={40}>
          <Stories />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal delay={80}>
          <Faq />
        </Reveal>
        <Reveal>
          <LeadForm />
        </Reveal>
      </main>
      <Footer />
      <StickyCta />
      <WhatsAppButton />
    </>
  );
}
