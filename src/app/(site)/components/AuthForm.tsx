`use client`;
// why it is use client

// import Button from '@/app/components/Button'
import Button from './Button'
// import Input from '@/app/components/input/Input'
import Input from './input/Input'


import { useState, useCallback, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
// import AuthSocialButton from './AuthSocialButton';


// new hooks
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {

    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN')// it give an initial value to variant, which is LOGIN and also give a type for safe which is Variant.
    const [isLoading, setIsLoading] = useState(false);


    // using the results from one hook (useSession) in another (useEffect).
    useEffect(() => {
        if (session.status === 'authenticated') { // using the result of useSession()
            router.push('/users')
        }
    },[session?.status, router]);


    const toggleVariant = useCallback (()=> {
        setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'))
    }, [variant]);


    const {
        register,
        handleSubmit,
        formState: { errors }, 
    } = useForm<FieldValues>({
        defaultValues: { name: '', email: '', password: ''},
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (variant === 'REGISTER') {
            //logical
        }

        if (variant === 'LOGIN') {
            //logical
        }

        
    }

    return (
        <section className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form>
                    {variant === 'REGISTER' && (
                        <Input
                            id=""
                            label=""
                            register={{}}
                            errors={{}}
                            disabled={false}
                        />
                    )}

                    <div>
                        <Button disabled = {isLoading} type='submit' fullWidth>
                            {variant === 'REGISTER' ? 'Sign up' : 'Sign in'}
                        </Button>
                    </div>
                </form>

            </div>
        </section>
    )

}


export default AuthForm;