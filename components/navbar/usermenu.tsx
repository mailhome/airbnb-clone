"use client";

import { Globe, Menu } from "lucide-react"
import Link from "next/link"
import { Avatar } from "../avatar"
import { useCallback, useEffect, useRef, useState } from "react"
import { NavbarMenu } from "./navbar-menu";
import { UseClickOutside } from "@/hook/use-click-outside";

export const UserMenu = () => {
    let menuRef  = useRef<null | HTMLInputElement >();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let handleClick = (e: any) => {
            if (!menuRef.current?.contains(e.target)) {
                setIsOpen(false);
            }
        }
            
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
        
    }, []);

    const toggleMenu = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

   

    return (
        <div className="hidden lg:flex flex-row items-center justify-center gap-x-4">
            <Link href="/host/homes" className="text-neutral-600 font-[600] p-2 px-4 hover:bg-neutral-200/50 rounded-full">
                Airbnb your home
            </Link>
            <div className="p-3 hover:bg-neutral-200/50 rounded-full cursor-pointer">
                <Globe className=" text-neutral-600" />
            </div>
            <div 
            onClick={toggleMenu}
            className="flex items-center justify-center p-4 rounded-full cursor-pointer hover:shadow-md border-[1px] gap-x-2">
                <Menu className="" />
                <Avatar />
            </div>

            {isOpen && (
                <div ref={menuRef}  className="absolute top-[98px] 2xl:w-60 bg-white rounded-md right-20  text-neutral-800 shadow-sm border-[1px]">
                    <div  className="flex items-start justify-start flex-col gap-y-0">
                        <div className=" w-full flex items-start justify-start flex-col py-2 border-b-2">
                            <NavbarMenu 
                            href="/sign-up"
                            label="Sign-up" 
                            className="font-[700] text-black" />
                            <NavbarMenu 
                            href="/sign-up"
                            label="Login" 
                            />
                        </div>
                        <div className=" w-full flex items-start justify-start flex-col py-2 border-b-2">
                            <NavbarMenu 
                            href="/gift-cards"
                            label="Gift Cards"  />
                            <NavbarMenu 
                            href="/host/homes"
                            label="Airbnb your home" 
                            />
                            <NavbarMenu 
                            href="/help"
                            label="Help" 
                            />
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    )
}