import { useEffect, useState } from "react";

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                });
            }
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, [])

    return windowSize;
}
export default useWindowSize;
