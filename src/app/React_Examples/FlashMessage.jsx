import React, { useEffect, useRef } from 'react';

const FlashMessage = ({message}) => {
    const messageRef = useRef(null);

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.style,backgroundColor = 'yellow'

            const timer = setTimeout(() => {
                messageRef.current.style.backgroundColor = '';
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div
            ref={messageRef}
            style={{
                padding: '10px',
                border: '1px solid #ccc',
                display: 'inline-block',
                margin: '10px'
            }}

        >
            {message}

        </div>
      
    )
}

export default FlashMessage;