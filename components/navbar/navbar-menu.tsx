import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
    label: string;
    href: string;
    className?: string;
}

export const NavbarMenu = ({
    label,
    href, 
    className
}: Props) => {
    return (
        <Link 
        href = {href} className={cn("w-full py-2 px-4 hover:bg-neutral-100 cursor-pointer text-lg", className)}>
            {label}
        </Link>
    )
}