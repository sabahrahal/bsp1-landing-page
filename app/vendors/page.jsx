import { VendorsForm } from "./components/VendorsForm"
import { VendorsInfo } from "./components/VendorsInfo"

const page = () => {
    return (
        <div className="my-[150px] md:my-[100px]">
            <h1 className="text-5xl uppercase font-bold mb-[50px]">Vendors</h1>
            <div className="max-w-3xl mx-auto mb-10">
                <h2 className="text-4xl uppercase text-center font-bold mb-2">Join Our Network of Trusted Vendors</h2>
                <p className="text-center">Welcome to Blessed Solutions Plumbing Vendors page! We appreciate your interest in partnering with us. Please take a moment to complete the registration form below to join our network of trusted vendors. We value your expertise and look forward to collaborating on exciting projects. For any inquiries or assistance, 
                    feel free to contact our team. Thank you for considering Blessed Solutions Plumbing as your preferred partner.</p>
            </div>
            <VendorsInfo />
            <VendorsForm />
        </div>
    )
}

export default page