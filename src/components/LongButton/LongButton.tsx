import { NavLink } from "react-router-dom"
import "./LongButton.css"
import HoverGlow from "../HoverGlow/HoverGlow"

type LongButtonProps = {
    img: string,
    color: string,
    href?: string,
    file?: string,
    text: string
}

export default function LongButton({img, color, href, file, text}: LongButtonProps) {
    return (
        <HoverGlow>
        {href ? (
            <NavLink to={href} className="LongButtonLink">
                <div className="LongButton" style={{backgroundColor: color, whiteSpace: 'pre-wrap'}}>
                    <img className="LongButtonImage" src={img} alt={text} height="44px"/>
                    <div className="LongButtonText">
                        {text}
                    </div>
                </div>
            </NavLink>
        ) : (
            <a href={file} className="LongButtonLink">
                <div className="LongButton" style={{backgroundColor: color, whiteSpace: 'pre-wrap'}}>
                    <img className="LongButtonImage" src={img} alt={text} height="44px"/>
                    <div className="LongButtonText">
                        {text}
                    </div>
                </div>
            </a>
        )}
        </HoverGlow>
    );
}