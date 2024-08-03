"use client";

import { useState } from "react";
import { Logo } from "../logo";
import { MaxWidthContainer } from "../max-width-container"
import { UserMenu } from "./usermenu"
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { UseScrollTop } from "@/hook/use-scroll-top";

export const Navbar = () => {
    const [search, setSearch] = useState(false);

    const scroll = UseScrollTop();
    return (
        <div className={cn("relative w-full border-b-2 shadow-sm", scroll && "fixed")}>
            <MaxWidthContainer className="">
                <div className={cn("items-center flex justify-start w-full", !scroll && "flex-col")}>
                    <div className="2xl:py-4 py-6 flex items-center justify-between w-full">
                        <Logo />
                        {scroll ? (
                            <div className="rounded-full border-2 h-fit py-2 pl-6 w-auto shadow-sm hover:shadow-md">
                                <div className="flex items-center justify-center gap-x-4">
                                    <div onClick={() => {}} className="font-semibold 2xl:text-lg xl:text-lg text-md">
                                        Anywhere
                                    </div>
                                    <div
                                    onClick={() => {}} className="border-x-2 font-semibold px-4 2xl:text-lg xl:text-lg text-md">
                                        Anyweek
                                    </div>
                                    <div
                                    onClick={() => {}} className="2xl:text-lg xl:text-lg text-md flex items-center justify-between w-40 pr-2">
                                        <div className="">
                                            Add Guests
                                        </div>
                                        <div className="bg-rose-500 p-2 text-white rounded-full">
                                            <Search className="2xl:size-4 xl:size-5 lg:size-4  text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                        <div className={cn("flex items-center justify-center 2xl:gap-x-20 xl:gap-x-16 lg:gap-x-10 2xl:text-lg xl:text-lg lg:text-md")}>
                            <div 
                            onClick={() => setSearch((value) => !value)}
                            className={cn("cursor-pointer ", !search && "font-bold py-2 px-6 rounded-full bg-neutral-200/50")}>
                                Stays
                            </div>

                            <div 
                            className={cn("cursor-pointer ", search && "font-bold py-2 px-6 rounded-full bg-neutral-200/50")} 
                            onClick={() => setSearch((value) => !value)}>
                                Experiences
                            </div>    
                        </div>
                     )}
                        <UserMenu />
                    </div>

                    <div className={cn("w-full", scroll && "hidden")}>
                    {search ? (
                        <div className="2xl:w-8/12 w-full 2xl:h-20 xl:h-20 lg:h-18 mx-auto border-2 mb-10 rounded-full shadow-sm hover:shadow-md">
                        <div className="grid 2xl:grid-col-3 xl:grid-cols-3 lg:grid-cols-3 w-full h-full">
                            <div className="flex flex-col items-start justify-start gap-y-0 text-neutral-400 hover:bg-neutral-100 hover:rounded-full h-full 2xl:pl-8 xl:px-8 lg:pl-6 pt-4 cursor-pointer">
                                <p className="text-neutral-800 font-[500] 2xl:text-lg xl:text-lg lg:text-md ">
                                    Where
                                </p>
                                <p className="lg:text-sm">
                                    Search Destinations
                                </p>
                            </div>

                            <div className="flex flex-col items-start justify-start gap-y-0 text-neutral-400 hover:bg-neutral-100 hover:rounded-full h-full 2xl:pl-8 xl:pl-8 lg:pl-4 pt-4 border-x-2 cursor-pointer">
                                <p className="text-neutral-800 font-[500] 2xl:text-lg xl:text-lg lg:text-md ">
                                    Date
                                </p>
                                <p className="lg:text-sm">
                                    Add Dates
                                </p>
                            </div>

                            <div className="flex items-center justify-between gap-y-0 text-neutral-500 hover:bg-neutral-100 hover:rounded-full h-full py-2 relative border-l-2 hover:border-none cursor-pointer">
                                <div className="flex flex-col items-start justify-start pl-4">
                                    <p className="text-neutral-800 font-[500] 2xl:text-lg xl:text-lg lg:text-md">
                                        Who
                                    </p>
                                    <p>
                                        Add Guests
                                    </p>
                                </div>
                                <div className="flex justify-center items-center 2xl:p-3 xl:p-3 lg:p-2 rounded-full bg-rose-500 mr-4 cursor-pointer">
                                    <Search className="2xl:size-8 xl:size-5 lg:size-4 text-white" />
                                </div>
                            </div>
                        </div>
                        </div>
                    ) : (
                        <div className="2xl:w-8/12 2xl:h-20 xl:h-20 lg:h-18 mx-auto border-2 mb-10 rounded-full shadow-sm hover:shadow-md">
                        <div className="w-full grid grid-cols-12 h-full ">
                            <div className="col-span-4 flex flex-col items-start justify-start gap-y-0 text-neutral-400 hover:bg-neutral-100 hover:rounded-full h-full px-8 2xl:pt-4 xl:pt-3 lg:pt-2 cursor-pointer 2xl:pl-8 xl:pl-8 lg:pl-4">
                                <p className="text-neutral-800 font-[500] 2xl:text-lg xl:text-lg lg:text-md">
                                    Where
                                </p>
                                <p className="lg:text-sm">
                                    Search Destinations
                                </p>
                            </div>

                            <div className="col-span-2 flex flex-col items-start justify-start gap-y-0 text-neutral-400 hover:bg-neutral-100 hover:rounded-full h-full 2xl:pl-8 xl:pl-8 pl-4 2xl:pt-4 xl:pt-2 lg:pt-2 border-x-2 cursor-pointer">
                                <p className="text-neutral-800 font-[500] 2xl:text-lg xl:text-lg lg:text-md ">
                                    Check in
                                </p>
                                <p className="lg:text-sm">
                                    Add Dates
                                </p>
                            </div>

                            <div className="col-span-2 flex flex-col items-start justify-start gap-y-0 text-neutral-400 hover:bg-neutral-100 hover:rounded-full h-full 2xl:pl-8 xl:pl-8 pl-4 2xl:pt-4 xl:pt-4 lg:pt-2 border-l-2 cursor-pointer">
                                <p className="text-neutral-800 font-[500] 2xl:text-lg xl:text-lg lg:text-md">
                                    Check out
                                </p>
                                <p className="lg:text-sm">
                                    Add Dates
                                </p>
                            </div>

                            <div className="col-span-4 flex items-center justify-between gap-y-0 text-neutral-500 hover:bg-neutral-100 hover:rounded-full h-full py-2 relative border-l-2 hover:border-none cursor-pointer">
                                <div className="flex flex-col items-start justify-start pl-4">
                                    <p className="text-neutral-800 font-[500] 2xl:text-lg xl:text-lg lg:text-md">
                                        Who
                                    </p>
                                    <p className="lg:text-sm">
                                        Add Guests
                                    </p>
                                </div>
                                <div className="flex justify-center items-center 2xl:p-3 xl:p-3 lg:p-2 rounded-full bg-rose-500 mr-4 cursor-pointer">
                                    <Search className="2xl:size-8 xl:size-5 lg:size-4  text-white" />
                                </div>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                    
                </div>
            </MaxWidthContainer>
        </div>
    )
}