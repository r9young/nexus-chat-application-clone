`use client`

import clsx from 'clsx'

interface ButtonProps {
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?:() => void;
    type?:'button' | 'submit' | 'reset' | undefined;
    // short-circuit evaluation
    disabled?: boolean;
    danger?:boolean;
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    fullWidth = false,
    children,
    onClick, // did not pass any handle function, e.g onClick={()=> alter('Clicked!')}

    // short-circuit evaluation
    disabled = false,
    danger = false,
    secondary = false,

}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                `
                    flex
                    justify-center
                    rounded-md
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                `,

                fullWidth && 'w-full',
                disabled && 'opacity-50 cursor-default',
                danger &&
                    'bg-rose-500 hover;bg-rose-600 focus-visible:outline-rose-600',
                // if both secondary and danger are not ture
                !secondary && !danger && 'bg-cyan-500 hover:bg-cyan-600 focus-visible:outline-cyan-600'
            )}
        >
            {children}
        </button>
    )
}

export default Button;