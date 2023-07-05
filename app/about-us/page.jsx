import { CallToAction, KeyPoints } from "./components"

const page = () => {
  return (
    <div className="my-[100px] md:my-[150px]">
      <p className="text-5xl uppercase font-bold mt-[100px] mb-[50px]">About us</p>
      <h1 className="text-4xl uppercase font-bold mb-2 text-center mx-auto lg:max-w-3xl">Welcome to Blessed Solutions Plumbing Your Trusted Plumbing Experts</h1>
      <p className="mb-10 mx-auto text-center lg:max-w-2xl">At Blessed Solutions Plumbing, we are proud to be your trusted plumbing experts, serving clients with top-notch services and exceptional customer care. 
                       With years of experience in the industry, we have established ourselves as a reliable provider of plumbing solutions for both residential and commercial needs</p>
      <KeyPoints />
      <CallToAction />
    </div>
  )
}

export default page
