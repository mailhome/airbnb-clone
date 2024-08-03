import Image from "next/image"

export const Avatar = () => {
    return (
        <Image 
        src="/placeholder.png" 
        alt="Avatar" 
        height={30} 
        width={30} 
        className="rounded-full" />
    )
}