import { NavLink } from "react-router-dom"
import "./LongButton.css"
import HoverGlow from "../HoverGlow/HoverGlow"
import { useCallback } from 'react';

type LongButtonProps = {
    img: string,
    color: string,
    href?: string,
    copy?: string,
    text: string
}

export default function LongButton({img, color, href, copy, text}: LongButtonProps) {
    const copyText = useCallback((event: React.MouseEvent) => {
        if (copy) {
            event.preventDefault();
            navigator.clipboard.writeText(copy);
        }
    }, [copy]);

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
            <div onClick={copyText} className="LongButtonLink">
                <div className="LongButton" style={{backgroundColor: color, whiteSpace: 'pre-wrap'}}>
                    <img className="LongButtonImage" src={img} alt={text} height="44px"/>
                    <div className="LongButtonText">
                        {text}
                    </div>
                </div>
            </div>
        )}
        </HoverGlow>
    );
}