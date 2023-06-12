import { CallToAction } from "./components/CallToAction";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";


export default function Home() {
  return (
    <>
      <Navbar />    
      <div className="container px-2 md:px-0 mt-40 md:mt-48">
        <Hero />
        <CallToAction />
        <Services />
      </div>    
    </>
  )
}
