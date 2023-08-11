import { Fragment, useEffect, useState } from "react";
import { SimpleAnimatedModal } from "../SimpleAnimationModal";

import styles from '../styles.module.css';

export const SimpleContent = () => {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        console.log("opened", opened);
    }, [opened]);
    useEffect(() => {
        console.log("SimpleContent mounted");
    }, []);
    return (
        <Fragment>
            <button
                className={styles.button}
                onClick={() => setOpened(true)}
            >
                Open Simple animation modal
            </button>
            <SimpleAnimatedModal opened={opened} onClose={() => setOpened(false)}>
                <h2
                    className={styles.modalContent}
                >
                    Simple animation content
                </h2>
            </SimpleAnimatedModal>
        </Fragment>
    )
}