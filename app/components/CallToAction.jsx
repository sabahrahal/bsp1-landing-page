import Image from "next/image"
import touchPhone from "../../public/images/touch-phone-cta.webp"
import callUs from "../../public/images/call_us.webp"
import Link from "next/link"
import { Card } from "./Card"

export const CallToAction = ({title}) => {
  return (
    <section className="my-[100px] md:my-[150px]">
        <h2 className="text-center text-4xl font-bold">{title}</h2>    
        <div className="flex flex-col gap-y-10 md:flex-row md:justify-center flex-wrap md:gap-x-48 mt-10">
            <Card
                href={'/contact#form'}
                img={touchPhone}
                text={'Schedule Online'}
            />

            <Card
                href={'tel:+13213161476'}
                img={callUs}
                text={'Call Us +1 (321) 316-1476'}
            />
        </div>
    </section>
  )
}
