'use client'
import clsx from 'clsx'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
    label:string;
    id: string;
    type?: string;
    required?:string;
    reigster: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id, 
    type='text',
    required = false, // required false?! so we don't need to fill it?!
    reigster, // ?? 
    errors,
    disabled = false, //
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label} {/* is it on the top or left side of input */}
            </label>
            <div>
                <input
                 type={type} 
                 // will somehow in other code give the value to input/type input/id?! I just think about reason why we put these props here?
                 id={id}
                 autoComplete={id} // what is autoComplete for?
                 disabled={disabled}
                 {...reigster(id, {required})} // What is it?
                  className={clsx(
                    `
                    form-input
                    block
                    w-full
                    rounded-md
                    border-0
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-cyan-600
                    sm:text-sm
                    sm:leading-6
                    `,

                    errors[id] && 'focus:ring-rose-500',
                    disabled && 'opacity-50 cursor-default' // what is the effect of disabled props set as false in input?
                  )}
                />
            </div>
        </div>
    )
}

export default Input;