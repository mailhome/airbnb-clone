'use client'

import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";

type Props = {
    children: React.ReactNode;
    SearchItemContent?: React.ReactElement;
    className?: string;
}

export const SearchItem = ({
    children,
    SearchItemContent,
    className,
}: Props) => {

    const [searchItem, setSearchItem] = useState(true);

    
    return (
        <div className="h-fit top-0 w-full">
            <div 
            onClick = {() => setSearchItem(!searchItem)} 
            className={cn("text-neutral-700 text-xl mt-10", className)}>
                { children }
            </div>
        </div>
    )
}