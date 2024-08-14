import React, { useState } from 'react';
import Chat from './Chat';
import Suggestions from './Suggestions';

function App() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [suggestions, setSuggestions] = useState(['What is AI?', 'Tell me a joke.', 'What is the weather today?']);

    const sendMessage = async(userMessage) => {
        const newMessage = { role: 'user', content: userMessage };
        setChatHistory([...chatHistory, newMessage]);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setChatHistory([...chatHistory, newMessage, ...data.choices[0].message]);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return ( <
        div className = "app-container" >
        <
        Suggestions suggestions = { suggestions }
        onSelect = { sendMessage }
        /> <
        Chat chatHistory = { chatHistory }
        onSendMessage = { sendMessage }
        /> < /
        div >
    );
}

export default App;