import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export const Dialog = ({ children }: Props) => {
    return (
        <dialog open>
            {children}
        </dialog>
    )
}