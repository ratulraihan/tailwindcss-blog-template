"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

const nav = [
    { href: '/', label: 'Home' },
    { href: '/stories', label: 'Stories' },
    { href: '/creator', label: 'Creator' },
    { href: '/community', label: 'Community' },
    { href: '/subscribe', label: 'Subscribe' },
]

export default function Navigation() {
    const pathname = usePathname()

    return (
        <>
            <nav className="hidden max-w-screen-md px-6 py-3 mx-auto font-semibold lg:flex gap-x-4">
                {nav.map(({ href, label }) => (
                    <Link key={href} href={href} className={
                        pathname === href ? 'text-primary-600' : ''
                    }>
                        {label}
                    </Link>
                ))}
            </nav>
        </>
    )
}