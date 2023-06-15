import Image from "next/image"
import touchPhone from "../../public/images/touch-phone-cta.webp"
import callUs from "../../public/images/call_us.webp"
import Link from "next/link"

export const CallToAction = () => {
  return (
    <section className="my-[100px] md:my-[150px]">
        <h2 className="text-center text-4xl font-bold">Fast and Effective Drainage Repair and Pipe Installation</h2>    
        <div className="flex flex-col gap-y-10 md:flex-row md:justify-center flex-wrap md:gap-x-48 mt-10">
            <Link href={"/contact"} className="rounded drop-shadow-lg">
                <Image className="rounded-t-lg" src={touchPhone} width={400} height={400} alt="touch phone" />
                <div className="p-4 bg-main rounded-b-lg hover:bg-secondary duration-300">
                    <p className="text-2xl font-bold text-white uppercase text-center">Schedule Online</p>
                </div>
            </Link>

            <Link href={"tel:"} className="rounded drop-shadow-lg">
                <Image className="rounded-t-lg" src={callUs} width={400} height={400} alt="touch phone" />
                <div className="p-4 bg-main rounded-b-lg hover:bg-secondary duration-300">
                    <p className="text-2xl font-bold text-white uppercase text-center">Call Us</p>
                </div>
            </Link>
        </div>
    </section>
  )
}
