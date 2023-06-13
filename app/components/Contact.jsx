import Image from "next/image"
import Link from "next/link"
import contact from "../../public/images/contact_banner.webp"

export const Contact = () => {
  return (
    <section className="my-[100px] md:my-[150px]">
        <div className="flex flex-col-reverse gap-y-2 lg:gap-y-0 lg:flex-row items-center">
            <div className="lg:w-2/5">
                <h3 className="text-4xl font-bold mb-2 text-main text-center lg:text-left">You Have Questions, We Have Answers.</h3>
                <p className="text-md lg:text-xl font-bold max-w-xl text-justify">Do you have any questions? Contact us through various methods by clicking or tapping on the button and choose the option that suits your needs best. 
                    Our team works diligently to provide you with a prompt response.</p>
                    <Link href={"https://wa.link/t65qda"} target="_blank" className="w-full lg:w-11/12 mt-6 py-4 px-2 bg-main text-white font-bold rounded flex text-lg items-center justify-center uppercase hover:bg-secondary duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 512 512">
                            <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/>
                        </svg>
                        Contact Us
                    </Link>
            </div>

            <div className="lg:w-3/5">
                <Image className="rounded" src={contact} width={1000} height={800} alt="contact us agent"/>
            </div>
        </div>
    </section>
  )
}
