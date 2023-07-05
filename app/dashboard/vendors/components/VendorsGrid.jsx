import { useEffect, useState } from "react"
import { getAllData } from "../../../firebase/fetch/getAllData"
import { VendorCard } from "./VendorCard";
import { useObserver } from "../../../hooks/useObserver";
import { NotAuthPage } from "../../../components/NoAuthPage";

const VendorsGrid = () => {

    const [peopleData, setDataPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isLogged } = useObserver();

    const fetchPeopleData = async () => {
        try {
            const data = await getAllData("vendors");
            if (!data) throw new Error("HTTP ERROR", resp);
            setLoading(false);
            setDataPeople(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPeopleData();
        !isLogged && <NotAuthPage />
    }, [])

    return (
        <>
            <div>
                < h1 className="text-5xl uppercase font-bold mt-[100px] mb-[50px]" > Vendors Table</h1 >
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        loading
                            ? <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-main border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span>
                            </div>
                            :
                            peopleData.length > 0
                                ? peopleData.map(vendor => <VendorCard key={vendor.id} {...vendor} />)
                                : <div className="text-5xl font-bold">no data available...</div>

                    }
                </section>
            </div >
        </>
    )
}

export default VendorsGrid