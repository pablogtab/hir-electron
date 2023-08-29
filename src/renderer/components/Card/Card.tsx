import { PropsWithChildren } from "react"
import './Card.css'





export const Card = ({ children, ...props }: PropsWithChildren) => {
    return (
        <div className="card" {...props}>
            {children}
        </div>
    )
}