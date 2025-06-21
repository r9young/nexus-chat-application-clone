'use client'
import clsx from 'clsx'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
    label:string;
    id: string;
    type?: string;
    required?:string;
    reigster: UseFormRegister<FieldValues>;
    errors: FieldError;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id, 
    type='text',
    required = false, // required false?! so we don't need to fill it?!
    reigster, // ?? 
    errors,
    disabled = false,
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
                 autoComplete={id}
                 disabled={disabled}
                 {...reigster(id, {required})}
                />
            </div>
        </div>
    )
}

export default Input;