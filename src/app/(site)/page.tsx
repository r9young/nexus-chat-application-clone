import AuthForm from './components/AuthForm'
import Image from 'next/image'

export default function Home() {
    return (
         <main className="flex flex-col-reverse lg:flex-row min-h-screen">
            {/* left Column */}
            <div
                className="lg:w-1/2 p-10"
                style={{ background: 'linear-gradient(45deg, #00BFFF, #0099CC)' }}
            >
                <a>
                    Github Code
                </a>

            </div>

            {/* right Column */}
            <div className="lg:w-1/2 bg-gray-100 p-10">
                <AuthForm/>
            </div>
        </main>


    )

}