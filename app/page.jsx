import { CallToAction, Hero, WhyChoose, Contact } from "./components";
import { pageData } from './data'
import { Services } from "./services/components";
export default function Home() {
  return (
      <>
        <Hero 
          title={pageData['home'].heroTitle}
          subtitle={pageData['home'].hertoSubtitle}
          paragraph={pageData['home'].heroParagraph}
        />
        <CallToAction 
          title={pageData['home'].ctaTitle}
        />
        <section className="my-[100px] md:my-[150px]">
          <Services />
        </section>
        <WhyChoose />
        <Contact />
      </>
  )
}
