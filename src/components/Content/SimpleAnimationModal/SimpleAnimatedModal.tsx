import { ReactNode } from "react";
import { Portal } from "../../Portal";
import { Layout } from "./Layout";
import { useMount } from "./useMount";

type Props = {
    opened: boolean;
    onClose: () => void;
    children: ReactNode;
}
export const SimpleAnimatedModal = ({ opened, onClose, children }: Props) => {
    const { mounted } = useMount({ opened });

    if (!mounted) {
        return null;
    }

    return (
        <Portal>
            <Layout onClose={onClose} opened={opened}>
                {children}
            </Layout>
        </Portal>
    );
};