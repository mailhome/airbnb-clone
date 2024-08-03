import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/" className="hidden lg:block">
            <Image 
            src="/airbnb-desktop.png" 
            className="hidden 2xl:block" 
            height={150}
            width={150}
            alt="Logo"  />

            <Image 
            src="/airbnb-mobile.png" 
            className="hidden 2xl:hidden xl:block lg:block" 
            height={40}
            width={50}
            alt="Logo"  />
        </Link>
    )
}