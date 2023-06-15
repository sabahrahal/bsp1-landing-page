'use client'

import { useState } from 'react'
import logo from "../../public/images/logo_bsp1_webp.webp"
import Image from 'next/image';
import { routes } from './utils/routes';
import Link from 'next/link';
import { NavbarMobile } from './NavbarMobile';

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
      <nav className="w-full bg-navbar fixed top-0 z-10 drop-shadow-lg">
        <div className="container px-2 md:px-0 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image className="md:w-[7rem] md:h-[7rem]" src={logo} height={80} width={80} alt='Logo bsp1'/>
            </Link>

            <div className="md:hidden">
              <NavbarMobile navbar={navbar} setNavbar={setNavbar}/>
            </div>
          </div>
          <div className={`h-screen md:h-auto mt-4 flex flex-col flex-wrap gap-y-4 md:flex-row md:gap-x-8 md:flex ${navbar ? 'block' : 'hidden' }`} >
              {
                routes.map(route => <Link className="text-white text-lg text-center font-bold" onClick={()=>setNavbar(false)} href={route.path} key={route.name} > {route.name} </Link>)
              }
            </div>
        </div>
      </nav>
    );
}
