import type { ReactElement } from "react"

type CardProps = {
    children?: ReactElement 
}

export const Card = ({ children }: CardProps) => {
    return (
        <div style={{border:"1px solid white", width: "90vw", height: "90vh"}}>
            {children}
        </div>
    )
}