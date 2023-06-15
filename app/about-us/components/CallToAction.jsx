import Image from "next/image"
import Link from "next/link"
import ImgBanner from "../../../public/images/plumber-banner.webp"

export const CallToAction = () => {
  return (
    <section>
        <p className="font-bold text-center mx-auto text-4xl uppercase mb-2">Blessed Solutions Plumbing</p>
        <p className="mb-10 text-center mx-auto lg:max-w-3xl"> Is a leading provider of reliable plumbing services, catering to residential and commercial clients. 
        With our commitment to quality, customer satisfaction, and expertise, we are your trusted choice for all your plumbing needs. 
        Contact us now for prompt and professional service.</p>
        <div className="flex bg-gray-100 rounded flex-col lg:flex-row p-4 lg:pb-0 drop-shadow-lg">
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <Image src={ImgBanner} width={408} height={611} alt="Plumbing service in Orlando" />
            </div>
            <div className="lg:w-2/3">
                <p className="text-4xl text-center lg:text-left lg:text-5xl uppercase text-main mt-8 font-bold">Plumbing service in Orlando</p>
                <h2 className="text-2xl lg:text-2xl text-main mt-6">Efficient Plumbing Solutions for Your Home or Business</h2>
                <div className="flex flex-col-reverse lg:flex-col">
                    <div>
                        <Link href={"/contact"} className="lg:w-40 py-4 px-2 bg-main text-white font-bold rounded flex text-lg items-center justify-center uppercase mt-6 hover:bg-secondary duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            Contact Us
                        </Link>
                    </div>

                    <p className="text-md lg:text-xl mt-6 lg:mt-10 lg:max-w-2xl text-justify font-bold" lang="en">Ready to experience exceptional plumbing services tailored to your unique needs? Don't hesitate to reach out to us today to discuss your specific plumbing requirements. 
                    Whether it's a minor repair, a complex installation, or routine maintenance, our dedicated team of experts is here to provide prompt and professional assistance. 
                    We take pride in delivering top-notch workmanship and ensuring your complete satisfaction. 
                    Contact us now and let us exceed your expectations with our reliable plumbing solutions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
