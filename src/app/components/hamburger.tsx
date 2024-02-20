'use client'
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants"
import Connexion from "./connexion"
import Image from "next/image";
import Link from "next/link"
import Button from "./Button"

interface HamburgerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClose }) => {
  const [showPopupConnexion, setShowPopupConnexion] = useState(false);

  const handleTogglePopupConnexion = () => {
    setShowPopupConnexion(!showPopupConnexion);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
}

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center bg-white z-20 py-10">
      <Link href="/" onClick={onClose}>
        <Image src="/logo.png" alt="logo" 
        width={80}
        height={80}
        className="rounded-lg"/>
      </Link>

        <div>
            <button onClick={onClose} className="absolute top-0 right-0 m-4">
                <Image
                    src="/close.png"
                    alt="fermer"
                    width={30}
                    height={30}
                />
            </button>
        </div>
  
        <div className="mt-12">
          
          <ul className="h-full gap-10 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 flexCenter cursor-pointer transition-all hover:font-bold"
              onClick={onClose}>
                {link.label}
              </Link>
            ))}
          </ul>

        </div>

        <Connexion isOpen={showPopupConnexion} onClose={handleTogglePopupConnexion} />

        <div className="lg:flexCenter pt-12" onClick={handleTogglePopupConnexion}>
          <Button
            type="button"
            title="Connexion"
            icon="/user.svg"
            variant="bg-black text-white py-2.5 px-4"
          />
        </div>

      </div>

  );
};

export default Hamburger;