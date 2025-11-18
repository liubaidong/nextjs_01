"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerLinks = [
    // { href: "/", label: "Home" },
    { href: "/performance", label: "Performance" },
    { href: "/reliability", label: "Reliability" },
    { href: "/scale", label: "Scale" },
]

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="absolute w-full z-10">
        <div className="flex justify-between container mx-auto mx-10  text-white p-5"  >
            <div className="text-3xl font-bold">
                <Link className={pathname === "/" ? "text-blue-500" : ""} href={"/"} >Home</Link>
            </div>
          
            <div className="text-xl space-x-5">
                {headerLinks.map((link) => (
                    <Link className={pathname === link.href ? "text-blue-500" : ""} key={link.href} href={link.href}>{link.label}</Link>
                ))}
            </div>
        </div>
        </div>
    )
}