import React from 'react';
import Image from 'next/image';

export default function membre() {
  return (
    <div className="bg-gray-100 relative z-0"> 
    
      
      <div className="container px-4 py-16 relative z-10">
        <div className='px-56'>
            <h1 className="text-4xl font-bold text-center mb-12">
            L’association comptabilise aujourd’hui 48 adhérents
            </h1>
            
            {/* Barre de recherche */}
            <div className="barre-de-recherche mb-8 mx-24">
            <input
                type="text"
                placeholder="Rechercher une personne..."
                className="block w-full px-24 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 titre">
            {[...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center justify-center py-8 mx-10 rounded-lg bg-white shadow">
                <Image
                    src='/membre.png'
                    alt={`Personne ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover mr-8"
                />
                <div>
                    <h2 className="texte font-semibold mb-2">Nom de Personne {index + 1}</h2>
                    <p className="text-sm text-gray-500 mb-2">Adhérent depuis 2 ans</p>
                    <p className="text-sm text-gray-500">Membre</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}

