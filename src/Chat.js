// src/Chat.js
import React, { useState } from 'react';

function Chat({ chatHistory, onSendMessage }) {
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        onSendMessage(input);
        setInput('');
    };

    return ( <
        div className = "chat-container" >
        <
        div className = "chat-history" > {
            chatHistory.map((message, index) => ( <
                div key = { index }
                className = { `chat-message ${message.role}` } > { message.content } <
                /div>
            ))
        } <
        /div> <
        div className = "chat-input" >
        <
        input type = "text"
        value = { input }
        onChange = {
            (e) => setInput(e.target.value) }
        onKeyPress = {
            (e) => e.key === 'Enter' && handleSendMessage() }
        placeholder = "Type your message..." /
        >
        <
        button onClick = { handleSendMessage } > Send < /button> <
        /div> <
        /div>
    );
}

export default Chat;