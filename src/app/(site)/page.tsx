// import AuthForm from './components/AuthForm'
// import Image from 'next/image'

// export default function Home() {
//     return (
//          <main className="flex flex-col-reverse lg:flex-row min-h-screen">
//             {/* left Column */}
//             <div
//                 className="lg:w-1/2 p-10"
//                 style={{ background: 'linear-gradient(45deg, #00BFFF, #0099CC)' }}
//             >
//                 <a>
//                     Github Code
//                 </a>

//             </div>

//             {/* right Column */}
//             <div className="lg:w-1/2 bg-gray-100 p-10">
//                 <AuthForm/>
//             </div>
//         </main>


//     )

// }



'use client'
import React, { useState } from 'react';
import FlashMessage from './React_Examples/FlashMessage';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Hello!');

  const handleChangeMessage = () => {
    setMessage('New message at ' + new Date().toLocaleTimeString());
  };

  return (
    <div style={{ padding: '20px' }}>
      <FlashMessage message={message} />
      <button onClick={handleChangeMessage}>
        Change Message
      </button>
    </div>
  );
};

export default App;
