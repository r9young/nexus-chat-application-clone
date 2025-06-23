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

    // using the updater function (updater) - setVariant from useState within your Callback function
    // useCallback memoizes the toggleVariant function. 
    const toggleVariant = useCallback (()=> {
        setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN')) // since prev === 'LOGIN' -> false, then state is set to 'LOGIN'
        // pre represent previous(current) state value
    }, [variant]);


    const {
        register,
        handleSubmit,
        formState: { errors }, 
    } = useForm<FieldValues>({
        defaultValues: { name: '', email: '', password: ''},
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            //logical
        }

        if (variant === 'LOGIN') {
            //logical
        }

        
    }


    const socialAction = (action: string ) => {
        setIsLoading(true);

        // SignIn
    }

    return (
        <section className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form >
                    {variant === 'REGISTER' && (
                        <Input
                            id="name"
                            label="Name"
                            register={{register}}
                            errors={errors}
                            disabled={isLoading}
                        />

                    )}

                        <Input
                            id = "email"
                            type = "email"
                            label = "Email Address"
                            // register = {register}
                            error = {errors}
                            disabled = {isLoading}
                        
                        />

                        <Input
                            id = "password"
                            type = "password"
                            label = "Password"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                  

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