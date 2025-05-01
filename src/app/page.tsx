import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ObstaclesSlider from "@/components/ObstaclesSwiper";
import ConsultationForm from "@/components/ConsultationForm";
import FAQ from "@/components/FAQAccordion";
import './globals.css'

export default function Home() {
  return (
    <>
      <Header />
      <main className=" bg-white ">
        <Hero />
        <ObstaclesSlider />
        <ConsultationForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
