import { ReactNode, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
type Props = {
    children: ReactNode;
};

export const Portal = ({ children }: Props) => {
    const [container] = useState(() => document.createElement('div'));
    useEffect(() => {
        console.log("Create container");

        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
            console.log("Remove container");
        }
    }, [container]);

    return ReactDOM.createPortal(children, container);
}