'use client'
import { NAV_LINKS } from "../constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import Connexion from "./connexion"
import { useState } from "react";
import Hamburger from "./hamburger"

const Navbar = () => {
  const [showPopupConnexion, setShowPopupConnexion] = useState(false);
  const [showPopupHamburger, setShowPopupHamburger] = useState(false);

  const handleTogglePopupConnexion = () => {
    setShowPopupConnexion(!showPopupConnexion);
  };

  const handleTogglePopupHamburger = () => {
    setShowPopupHamburger(!showPopupHamburger);
  };
  return (
    <nav className="flexBetween padding-container py-2 px-3 bg-white fixed w-full top-0 z-10">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded-lg"/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 flexCenter cursor-pointer transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <Connexion isOpen={showPopupConnexion} onClose={handleTogglePopupConnexion} />
      <Hamburger isOpen={showPopupHamburger} onClose={handleTogglePopupHamburger} />

      <div className="lg:flexCenter hidden" onClick={handleTogglePopupConnexion}>
        <Button
          type="button"
          title="Connexion"
          icon="/user.svg"
          variant="bg-black text-white py-2.5 px-4"
        />
      </div>


      <Image onClick={handleTogglePopupHamburger}
        src="menu.svg"
        alt="menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar