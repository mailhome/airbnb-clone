import { useEffect, useState } from "react"

export const UseScrollTop = (threshold = 10) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        document.addEventListener("scroll", handler);
        return () => document.removeEventListener("scroll", handler);

    }, [threshold]);

    return scroll;
}