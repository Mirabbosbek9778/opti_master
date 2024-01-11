import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const update = () => {
            setScroll(window.pageYOffset)
        }

        window.addEventListener('scroll', update);
        update();
        return () => window.removeEventListener(scroll, update);
    }, [scroll])

    return scroll;
}