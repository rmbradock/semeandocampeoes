import React from 'react';
import { useState } from 'react';
import './MyButton.css'

interface Props{
    onClick?: () => void;

    className?: string;
    enter?: string;
    leave?: string;
    children?: React.ReactNode;
    boxShadow?: string;

    width?: string;
    height?: string;

    cursor?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    fontSize?: string;
    padding?: string;
    fontWeight?: string;
    transition?: string;
    zIndex?: string;
    gap?: string;
}

const MyButton = ({className, enter, leave, onClick, children, width, height, cursor, display, justifyContent, alignItems, border, borderBottom, borderRadius, padding, fontSize, fontWeight, transition, boxShadow, zIndex, gap,}: Props) => {

    const [hover, setHover] = useState(false)
        const handleMouseEnter = () => {
            setHover(true)
        }

        const handleMouseLeave = () => {
            setHover(false)
        }


    const estiloBotao: React.CSSProperties = {width, height, cursor, display, justifyContent, alignItems, backgroundColor: hover ? enter : leave, border, borderBottom, borderRadius, padding, fontSize, fontWeight, transition, boxShadow, zIndex, gap, }

  return (
    <button className={className} style={estiloBotao} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
    </button>
  )
}

export default MyButton