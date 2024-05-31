import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

const photos = [
    {
      src: "/loicbruni.jpg",
      description: "Jean-baptiste Président",
      key: "1"
    },
    {
      src: "/imageEnduro.jpg",
      description: "Nik Trésorier",
      key: "2"
    },
    
  ];


export default async function Home() {
    const session = await getServerSession(authOptions)


    return (
        <div className="w-full">
            <div className="flex items-center justify-center mb-10">
                <div className="relative w-full z-0">
                <div className="relative">
                        <Image
                            src="/image_Acceuil.jpg"
                            alt="Rien"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                            width={500}
                            height={300}
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center text-white">
                            <h1 className="text-8xl">Ride is Right</h1>
                        </div>
                    </div>
                    <h1 className="flex justify-center text-4xl m-16 pt-10 font-bold">
                        L'association
                    </h1>

                    <div className="m-10 flex items-end justify-center">
                        <h2 className="text-4xl">
                            10
                        </h2>
                        <Link href='/partenaires' key='Partenaires' className="hover:font-bold mr-20 ml-2 text-2xl">
                            Partenaires
                        </Link>

                        <h2 className="text-4xl ml-20">
                            50
                        </h2>
                        <Link href='/membres' key='Membres' className="hover:font-bold mr-20 ml-2 text-2xl">
                            Adhérents
                        </Link>
                    </div>
                    
                    <div className="flex justify-center items-center flex-col">
                        <p className="my-3">
                            Enduro en île de France
                        </p>

                        <p className="my-3">
                            Multiples sortie en îles de france tous les week-ends et after-works
                        </p>

                        <p className="my-3">
                            Week-end en montagne organisé
                        </p>
                    </div>
                    

                </div>

                {/* <pre>{JSON.stringify(session)}</pre> */}

            </div>
            
            <h1 className="flex justify-center text-4xl m-16 pt-10 font-bold">
                Bureau restreint
            </h1>

            <div className="max-w-lg w-full mx-auto grid grid-cols-1 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-full rounded-lg overflow-hidden mb-4">
            <Image
              src='/imageEnduro.jpg'
              alt="Photo 1"
              layout="responsive"
              width={500}
              height={750}
              className="rounded-lg"
            />
          </div>
          <p className="text-center text-lg font-medium">Jean-Baptiste</p>
          <p className="text-center text-base font-medium">Président</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full rounded-lg overflow-hidden mb-4">
            <Image
              src='/loicbruni.jpg'
              alt="Photo 2"
              layout="responsive"
              width={500}
              height={750}
              className="rounded-lg"
            />
          </div>
          <p className="text-center text-lg font-medium">Niko</p>
          <p className="text-center text-base font-medium">Trésorier</p>
        </div>
      </div>
        
    </div>
        


  );
}


