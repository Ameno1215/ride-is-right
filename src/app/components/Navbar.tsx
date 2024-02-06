import { NAV_LINKS } from "../constants"
import Image from "next/image"
import { useEffect, useState } from "react";
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
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

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Connexion"
          icon="/user.svg"
          variant="bg-black text-white py-2.5 px-4"
        />
      </div>

      <Image 
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