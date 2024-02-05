import Image from "next/image";
import styles from "../styles/acceuil.css";

export default function Home() {
  return (

    <div className="flex items-center justify-center mb-10">
        <div className="relative">
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
            <div className="absolute bottom-0 left-0 right-0 top-taille text-center text-white z-1">
                <h1 className={`text-8xl ${styles.animateFadeInUp}`}>Ride is Right</h1>
            </div>
        </div>

    </div>


  );
}


