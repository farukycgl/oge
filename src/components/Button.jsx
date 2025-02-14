import React from 'react'

const Button = ({ children, className, onClick }) => {


    return (
        <button
            className={`px-4 py-2 text-white bg-black rounded-md ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;