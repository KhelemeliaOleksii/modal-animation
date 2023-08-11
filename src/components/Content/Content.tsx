import { Fragment } from "react";
import { SimpleContent } from "./SimpleContent";
import { ComplexContent } from "./ComplexContent";
import { Dialog } from '../Dialog';
export const Content = () => {
    return (
        <Fragment>
            <Dialog>
                <p>Greetings, one and all!</p>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </Dialog>
            <SimpleContent />
            {/* <hr />
            <ComplexContent /> */}
        </Fragment>
    )
}