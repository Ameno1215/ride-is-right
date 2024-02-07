'use client'
import React, { useEffect } from "react";
import Button from "./Button";
import Image from "next/image";

interface HamburgerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClose }) => {
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
const Hamburger: React.FC<Hamburger> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
}

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center bg-white z-20 py-10">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="rounded-lg pb-12"
      />

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
    
    
      
      
        

        <h1>OUI</h1>
      </div>

  );
};

export default Hamburger;