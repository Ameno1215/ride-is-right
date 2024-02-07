'use client'
import React, { useEffect } from "react";
import Button from "./Button";
import Image from "next/image";

interface ConnexionProps {
  isOpen: boolean;
  onClose: () => void;
}

const Connexion: React.FC<ConnexionProps> = ({ isOpen, onClose }) => {
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
const Connexion: React.FC<Connexion> = ({ isOpen, onClose }) => {
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
        className="rounded-lg mb-12"
      />

      
      
      
      <div className="py-5 px-10 rounded-xl border-2">
      <h1 className="flex justify-center items-center mb-5 font-bold text-2xl">Connection</h1>
      
        <button onClick={onClose} className="absolute top-0 right-0 m-4">
            <Image
              src="/close.png"
              alt="fermer"
              width={30}
              height={30}
            />
        </button>

        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center">
            <label><b>Email</b></label>
            <input type="email" id="email" name="email" placeholder="exemple@exemple.fr" required
            className="mt-1"></input>
            <label className="mt-4"><b>Mot de passe</b></label>
            <input type="password" id="password" placeholder="Entrer le mot de passe" name="password" required
            className="mt-1 w-taille"></input>
          
          </div>
            <a className="text-sm text-black hover:font-bold py-3" href="#">
                Mot de passe oublié ?
            </a>

            <div className="lg:flexCenter pt-5">
                <Button
                type="button"
                title="Connexion"
                variant="bg-black text-white py-2.5 px-10"
                
                />
            </div>

        </form>
      </div>
    </div>
  );
};

export default Connexion;