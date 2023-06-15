import { CallToAction, Services } from "./components"

const page = () => {
  return (
    <div className="my-[100px] md:my-[150px]">
      <p className="text-5xl uppercase font-bold my-[100px] md:my-[150px]">Services</p>
      <h1 className="text-4xl uppercase font-bold mb-2 text-center mx-auto lg:max-w-3xl">Plumbing Services Tailored to Your Needs</h1>
      <p className="mb-10 mx-auto text-center lg:max-w-2xl">At Blessed Solutions, we provide a wide range of professional plumbing services to meet your specific needs. 
      Our team of experts is committed to delivering efficient and reliable solutions for both residential and commercial properties. </p>

      <Services />
      <CallToAction />
    </div>
  )
}

export default page