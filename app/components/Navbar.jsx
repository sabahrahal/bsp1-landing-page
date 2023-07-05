'use client'

import { useState } from 'react'
import logo from "../../public/images/logo_bsp1_webp.webp"
import Image from 'next/image';
import { routes } from './utils/routes';
import Link from 'next/link';
import { NavbarMobile } from './NavbarMobile';
import { useObserver } from '../hooks/useObserver';

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { isLogged } = useObserver();

    return (
      <nav className="w-full bg-navbar fixed top-0 z-10 h-auto drop-shadow-lg py-1">
        <div className="container py-2 lg:px-0 px-2  md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image className="md:w-[70px] md:h-[70px]" src={logo} height={50} width={50} alt='Logo Blesses Solutions Plumbing'/>
            </Link>

            <div className="md:hidden flex justify-center items-center">
              <NavbarMobile navbar={navbar} setNavbar={setNavbar}/>
            </div>
          </div>
          <div className={`h-screen md:h-auto mt-4 flex flex-col flex-wrap gap-y-4 md:flex-row md:gap-x-8 md:flex ${navbar ? 'block' : 'hidden' }`} >
              {
                routes.map(route => <Link className="text-white text-lg text-center font-bold" onClick={()=>setNavbar(false)} href={route.path} key={route.name} > {route.name} </Link>)
              }
              {isLogged && <Link onClick={()=>setNavbar(false)} href={"/dashboard/vendors"} key={"vendors-table"} className="text-white text-lg text-center font-bold">Vendors Table</Link>}
          </div>
        </div>
      </nav>
    );
}
