import React from 'react';

 export function Button({children, disabled, onClick, buttonStyle, buttonSize, type}){
    const STYLES = ['btn-primary', 'btn-outline'];
    const SIZES = ['btn-medium', 'btn-large', "btn-small"];

    function checkButtonStyle (){
        return STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    }

    function checkButtonSize (){
        return SIZES.includes(buttonSize)? buttonSize : SIZES[0];
    }

    return(
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
            >
            {children}
        </button>


    )




}
