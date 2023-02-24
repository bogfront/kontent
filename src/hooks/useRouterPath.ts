import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const useRouterPath = () => {
    const [isRegistry, setIsRegistry] = useState(false);
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        setIsRegistry(pathname === '/registry');
    });

    return {
        isRegistry,
        pathname
    };
};

export default useRouterPath;