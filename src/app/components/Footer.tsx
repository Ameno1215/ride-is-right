import Image from "next/image"
import Link from "next/link"
import {FOOTER_LINKS } from "../constants"
import {SOCIALS_LINKS } from "../constants"
import React from 'react'

const Footer = () => {
    return (
        <footer className=" min-h-screen ">
            <div className="padding-container max-container flex flex-col gap-14 flexCenter ">

                <div className="flex flex-col items-start justify-center gap-[10%] mdflex-row ">
                  <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1"> 
                    {FOOTER_LINKS.map((columns) => (
                       <Link href={columns.href} key={columns.key} className="hover:font-bold">
                           {columns.label}
                       </Link>
                    ))}
                  </div>
                </div>
                
                <div className="flexCenter">
                      <ul className="regular-14 flex gap-4">
                        {SOCIALS_LINKS.map((link) => (
                         <Link href={link.href} key={link.key}>
                            {link.icon && <Image src={link.icon} width={24} height={24} />}
                         </Link>
                        ))}
                      </ul>
                </div>

            </div>
        </footer>
    )
}


export default Footer