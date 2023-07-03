import Link from "next/link";

export const metadata = {
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


const NotFound = () => {

    return (
        <div className="bg-slate-300 rounded p-8 lg:max-w-[50%] mx-auto flex items-center flex-col">
            <p className="text-center text-3xl font-bold uppercase mb-8 text-main">
                No se ha encontrado esta página. 404
            </p>
            <Link
                href="/"
                className="bg-main hover:bg-secondary font-bold p-3 rounded text-white hover:bg-maindark hover:duration-300 duration-300"
            >
                Regresar al inicio
            </Link>
        </div>
    );
};

export default NotFound; 
