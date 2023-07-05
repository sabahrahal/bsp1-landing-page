'use client'
import { NotAuthPage } from "../../components/NoAuthPage";
import { useObserver } from "../../hooks/useObserver";
import VendorsGrid from "./components/VendorsGrid";

const page = () => {

    const { isLogged } = useObserver();
  return (
    <>
        {
            isLogged ? <VendorsGrid/> : <NotAuthPage />
        }
    </>
  )
}

export default page