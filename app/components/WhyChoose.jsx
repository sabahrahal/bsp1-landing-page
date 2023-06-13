import Image from "next/image"
import ImgWhyChoose from "../../public/images/why-us.webp"
import Link from "next/link"

export const WhyChoose = () => {
  return (
    <section className="drop-shadow-lg">
        <h3 className="text-center text-4xl font-bold">Why choose Blessed Solutions?</h3>

        <div className="flex bg-gray-100 rounded flex-col lg:flex-row mt-10">
            <div className="lg:w-3/5 flex justify-center">
                <Image className="rounded" src={ImgWhyChoose} width={800} height={551} alt="Why choose Plumbing Service" />
            </div>
            <div className="lg:w-2/5 p-4">
                <h1 className="text-4xl text-center lg:text-left md:text-5xl uppercase text-main mt-8">Professionals in Plumbing services</h1>
                <h2 className="text-2xl lg:text-2xl text-main mt-6">Learn more about us and all the solutions we offer</h2>
                <section className="flex flex-col lg:flex-col">

                <div className="text-md lg:text-xl mt-6 lg:mt-10 md:max-w-2xl lg:hyphens-auto flex flex-col" lang="en">
                    <b>· EXTENSIVE RANGE OF SERVICES</b>
                    <p className="text-sm mb-2">One-stop solution for all plumbing needs, from repairs to installations. Experienced professionals and prompt, reliable service.</p>
                    
                    <b>· HIGHLY SKILLED PROFESSIONALS</b>
                    <p className="text-sm mb-2">Licensed plumbers with expertise in tackling any plumbing challenge using advanced techniques and tools.</p>

                    <b>· PROMPT AND RELIABLE SERVICE</b>
                    <p className="text-sm mb-2">Timely arrival, efficient diagnosis, and effective solutions to minimize inconvenience.</p>

                    <b>· COMPETITIVE PRICING</b>
                    <p className="text-sm mb-2">Transparent pricing structure, detailed estimates, and exceptional value for your investment.</p>

                    <b>· CUSTOMER SATISFACTION GUARANTEED</b>
                    <p className="text-sm">Personalized solutions, active listening, and long-term relationships built on excellence.</p>
                </div>

                    <div>
                        <Link href={"https://wa.link/t65qda"} target="_blank" className="lg:w-40 py-4 px-2 bg-main text-white font-bold rounded flex text-lg items-center justify-center uppercase mt-6 hover:bg-secondary duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 576 512">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                            </svg>
                            About Us
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    </section>
  )
}
