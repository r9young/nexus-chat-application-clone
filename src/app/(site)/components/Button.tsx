`use client`

import clsx from 'clsx'

interface ButtonProps {
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?:() => void;
    type?:'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;


}

const Button: React.FC<ButtonProps> = ({
    fullWidth = false,
    children,
    onClick, // did not pass any handle function, e.g onClick={()=> alter('Clicked!')}
    disabled = false

}) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={clsx(
                fullWidth && 'w-full',
                disabled && 'opacity-50 cursor-default'
            )}
        >
            {children}
        </button>
    )
}