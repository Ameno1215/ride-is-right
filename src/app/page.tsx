import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";


export default async function Home() {
    const session = await getServerSession(authOptions)


    return (

        <div className="flex items-center justify-center mb-10">
            <div className="relative w-full z-0">
                <div>
                    <Image
                        src="/image_Acceuil.jpg" 
                        alt="Rien"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        // layout="responsive"
                        width={500}
                        height={300}
                    />
                    {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center text-white z-1">
                        <h1 className="text-8xl">Ride is Right</h1>
                    </div> */}
                </div>

                <h1 className="flex justify-center text-5xl m-16 pt-10">
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


  );
}


