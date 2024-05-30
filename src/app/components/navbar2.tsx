'use client'

// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Button from "./Button";
import { NAV_LINKS } from "../constants";

const Navbar2 = () => {
  const { data: session } = useSession();

  return (
    <nav className="flexBetween padding-container relative z-30 py-2 px-3">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={45} height={45} className="rounded-lg"/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        {session ? (
          <p>Welcome, {session.user.name}!</p>
        ) : (
          <Button
            type="button"
            title="Connexion"
            icon="/user.svg"
            variant="bg-black text-white py-3 px-6"
            onClick={() => signIn()}
          />
        )}
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar2;
