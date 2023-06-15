import Image from "next/image"
import ImgWhyChoose from "../../../public/images/why-us.webp"

export const KeyPoints = () => {
    return (
        <section className="mb-[100px] md:mb-[150px]">
            <div className="flex bg-gray-100 rounded flex-col lg:flex-row-reverse mt-10 drop-shadow-lg">
                <div className="lg:w-3/5">
                    <Image className="rounded" src={ImgWhyChoose} width={800} height={552} alt="Why choose Plumbing Service" />
                </div>
                <div className="lg:w-2/5 p-4">
                    <h2 className="text-4xl text-center lg:text-left md:text-5xl uppercase text-main mt-8 font-bold">Our Commitment to Quality and Customer Satisfaction</h2>
                    <div className="flex flex-col lg:flex-col">

                        <div className="text-md lg:text-xl mt-6 lg:mt-10 md:max-w-2xl lg:hyphens-auto flex flex-col" lang="en">
                            <b>· Professional Plumbing Services</b>
                            <p className="text-sm mb-2">Our team of skilled and licensed plumbers delivers a comprehensive range of plumbing services, including repairs, installations, and maintenance.</p>

                            <b>· Cutting-Edge Techniques</b>
                            <p className="text-sm mb-2">We stay updated with the latest industry trends and employ advanced techniques to ensure efficient and effective solutions.</p>

                            <b>· Timely and Reliable Service</b>
                            <p className="text-sm mb-2">We understand the importance of prompt service and strive to address your plumbing issues in a timely manner, minimizing any inconvenience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-gray-100 rounded flex-col lg:flex-row mt-10 drop-shadow-lg">
                <div className="lg:w-3/5">
                    <Image className="rounded" src={ImgWhyChoose} width={800} height={552} alt="Why choose Plumbing Service" />
                </div>
                <div className="lg:w-2/5 p-4">
                    <h2 className="text-4xl text-center lg:text-left md:text-5xl uppercase text-main mt-8 font-bold">Why Choose Blessed Solutions Plumbing for Your Plumbing Needs?</h2>
                    <div className="flex flex-col lg:flex-col">

                        <div className="text-md lg:text-xl mt-6 lg:mt-10 md:max-w-2xl lg:hyphens-auto flex flex-col" lang="en">
                            <b>· Expertise and Experience</b>
                            <p className="text-sm mb-2">Our team consists of highly skilled plumbers with years of experience in handling diverse plumbing projects</p>

                            <b>· Superior Workmanship</b>
                            <p className="text-sm mb-2">We take pride in delivering top-notch workmanship and ensuring the highest quality standards in every project we undertake.</p>

                            <b>· Comprehensive Solutions</b>
                            <p className="text-sm mb-2">From minor repairs to complex installations, we offer a wide range of plumbing services to meet your specific requirements.</p>

                            <b>· Customer-Centric Approach</b>
                            <p className="text-sm mb-2">We believe in providing fair and transparent pricing, ensuring that you understand the costs involved before any work begins.</p>

                            <b>· Transparent Pricing</b>
                            <p className="text-sm mb-2">We believe in providing fair and transparent pricing, ensuring that you understand the costs involved before any work begin</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
