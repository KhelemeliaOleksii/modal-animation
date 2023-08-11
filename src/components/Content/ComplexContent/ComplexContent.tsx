import { Fragment, useEffect, useState } from "react";

export const ComplexContent = () => {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        console.log("opened in Complex", opened);
    }, [opened]);
    useEffect(() => {
        console.log("ComplexContent mounted");
    }, []);
    return (
        <Fragment>
            <button
                onClick={() => setOpened(true)}
            >
                Open Complex animation modal
            </button>
        </Fragment>
    )
}