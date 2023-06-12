import Image from "next/image"
import ImgBanner from "../../public/images/plumber-banner.webp"
import Link from "next/link"

export const Hero = () => {
    return (
        <div className="flex bg-gray-100 rounded flex-col md:flex-row">
            <div className="md:w-1/3 flex justify-end">
                <Image src={ImgBanner} width={408} height={611} alt="Plumbing service in Orlando" />
            </div>
            <div className="md:w-2/3">
                <h1 className="text-4xl text-center md:text-left md:text-5xl uppercase text-main mt-8">Plumbing service in Orlando</h1>
                <h2 className="text-2xl md:text-2xl text-main mt-6">Efficient Plumbing Solutions for Your Home or Business</h2>
                <section className="flex flex-col-reverse md:flex-col">
                    <div>
                        <Link href={"#"} className="md:w-40 py-4 px-2 bg-main text-white font-bold rounded flex text-lg items-center justify-center uppercase mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            Contact Us
                        </Link>
                    </div>

                    <p className="text-md md:text-xl mt-6 md:mt-10 md:max-w-2xl md:hyphens-auto font-bold" lang="en">Discover our website dedicated to premium plumbing solutions, specializing in the repair and installation of pipelines and drainage systems. 
                    Our team of skilled professionals is committed to delivering dependable and cost-effective services tailored to your residential or commercial requirements. 
                    Count on us for affordable and expert plumbing assistance, ensuring smooth and efficient water flow.</p>
                </section>
            </div>
        </div>

    )
}
