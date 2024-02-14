"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { TbBell, TbEdit } from "react-icons/tb";
import Navigation from "./Navigation";

const isLogged = 0

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="flex items-center justify-between pt-4 pb-2 mx-auto lg:py-6 container-fluid">
            <Link href="/">
                <Image src="/logo.svg" alt="Digimax" width={120} height={60} />
            </Link>

            <Navigation />

            <div className="flex items-center justify-between gap-4">
                {isLogged ? (
                    <>
                        <Link className="flex items-center justify-between gap-1 font-bold" href="">
                            <TbEdit className="text-xl" /> Write
                        </Link>
                        <Link href=""><TbBell className="text-xl" /></Link>
                        <Link href=""><Image className="w-10 rounded-full" src="/profile.jpg" alt="Profile" width={40} height={40} /></Link>
                    </>
                ) : (
                    <>
                        <Link href="/login">Login</Link>
                        <Link href="/register" className="btn">Register</Link>
                    </>
                )}
            </div>
        </header>
    )
}