import Image from "next/image"
import  logo from "../../public/images/logo_bsp1_webp.webp"
import { LoginForm } from "./components/LoginForm"

const page = () => {
    return (
        <div className="bg-slate-300 rounded p-8 lg:max-w-[50%] mx-auto">
            <Image className="mx-auto mb-3" src={logo} width={200} height={200} alt="Logo" />
            <p className="text-center text-2xl font-bold uppercase mb-8 text-main">Admin Login</p>
            <div className="flex justify-center items-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default page