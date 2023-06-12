import Image from "next/image"
import touchPhone from "../../public/images/touch-phone-cta.webp"
import Link from "next/link"

export const CallToAction = () => {
  return (
    <section className="my-[100px] md:my-[150px]">
        <h3 className="text-center text-4xl font-bold">Fast and Effective Drainage Repair and Pipe Installation</h3>    
        <div className="flex flex-col gap-y-10 md:flex-row md:justify-center flex-wrap md:gap-x-48 mt-10">
            <Link href={"#"} className="rounded">
                <Image className="rounded-t-lg" src={touchPhone} width={400} height={400} alt="touch phone" />
                <div className="p-4 bg-main rounded-b-lg">
                    <p className="text-2xl font-bold text-white uppercase text-center">Schedule Online</p>
                </div>
            </Link>

            <Link href={"#"} className="rounded">
                <Image className="rounded-t-lg" src={touchPhone} width={400} height={400} alt="touch phone" />
                <div className="p-4 bg-main rounded-b-lg">
                    <p className="text-2xl font-bold text-white uppercase text-center">Schedule Online</p>
                </div>
            </Link>
        </div>
    </section>
  )
}
