import Link from "next/link";


export default function partenaires() {
    return (

      <div className="container mx-auto py-10">

          <div className="flex items-center bg-white p-4 shadow mb-10">
              <div className="relative w-3/5 h-auto">
                  <a href="https://www.racecompany.fr/fr/" target="_blank" rel="noopener noreferrer">
                      <img src="/logoRace.svg" alt="Image 1" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-lg">Accéder au site</span>
                      </div>
                  </a>
              </div>
              <div className="w-2/3 text-center p-4">
                  <p>Commandes groupées avantageuses avec l’association
                    codes promotionnels Valables toute l’année</p>
                    <Link href="/" className="hover:font-bold">
                    En profiter
                  </Link>
              </div>
          </div>
            
          <div className="flex items-center bg-white p-4 shadow mb-10">
              <div className="relative w-3/5 h-auto">
                  <a href="https://www.continental-tires.com/fr/fr/" target="_blank" rel="noopener noreferrer">
                      <img src="/continental.jpg" alt="Image 2" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-lg">Accéder au site</span>
                      </div>
                  </a>
              </div>
              <div className="w-2/3 text-center p-4">
                  <p>Pneus VTT et vélos route
                    Commandes groupées avantageuses avec l’association
                     Prix avantageux.</p>
                  <Link href="/" className="hover:font-bold">
                    En profiter
                  </Link>
              </div>
          </div>

          <div className="flex items-center bg-white p-4 shadow mb-10">
              <div className="relative w-3/5 h-auto">
                  <a href="https://www.alltricks.fr/" target="_blank" rel="noopener noreferrer">
                      <img src="/alltricks.png" alt="Image 2" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-lg">Accéder au site</span>
                      </div>
                  </a>
              </div>
              <div className="w-2/3 text-center p-4">
                  <p>e-commerce sportif
                    Codes promotionnels 15% rayon running 
                                      5% rayon cycle</p>
                  <Link href="/" className="hover:font-bold">
                    En profiter
                  </Link>
              </div>
          </div>

          <div className="flex items-center bg-white p-4 shadow mb-10">
              <div className="relative w-3/5 h-auto">
                  <a href="https://galfer.eu/" target="_blank" rel="noopener noreferrer">
                      <img src="/galfer.jpg" alt="Image 2" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-lg">Accéder au site</span>
                      </div>
                  </a>
              </div>
              <div className="w-2/3 text-center p-4">
                  <p>Plaquettes et disques de freins 
                  Commandes groupées avantageuses avec l’association</p>
                  <Link href="/" className="hover:font-bold">
                    En profiter
                  </Link>
              </div>
          </div>

      </div>
      
    )
  }
  
  