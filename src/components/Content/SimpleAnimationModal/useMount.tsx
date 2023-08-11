import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./Layout/const";

type Props = {
    opened: boolean;
}
export const useMount = ({ opened }: Props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        if (opened && !mounted) {
            setMounted(true);
        } else if (!opened && mounted) {
            setTimeout(() => {
                setMounted(false)
            }, ANIMATION_TIME)
        }
    }, [opened, mounted]);

    return {
        mounted,
    };
}; 
