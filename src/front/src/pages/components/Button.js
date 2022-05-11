import React from 'react';
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const chkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const chkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${chkBtnStyle} ${chkBtnSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )

}
export default Button