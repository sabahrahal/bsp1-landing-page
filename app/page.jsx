import { CallToAction, Footer, Hero, Navbar, Services, WhyChoose, Contact } from "./components";

export default function Home() {
  return (
      <div className="container px-2 md:px-0 mt-40 md:mt-48">
        <Hero />
        <CallToAction />
        <Services />
        <WhyChoose />
        <Contact />
      </div>    
  )
}
