import React, { useState } from 'react';
import SendIcon from '../assets/send.png';  

function Chat() {
    const [messages, setMessages] = useState([
        { text: "Hi", sender: "user" },
        { text: "Hello, how may we help you?", sender: "bot" }
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSend = () => {
        if (newMessage.trim()) { 
            setMessages([...messages, { text: newMessage, sender: "user" }]);
            setNewMessage(""); 
        }
    };

    return (
        <div className="bg-[#F8F8F8] min-h-screen flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md h-[85vh] flex flex-col justify-between rounded-lg shadow-lg p-4">
                
                <div className="flex-grow flex flex-col justify-end space-y-4 overflow-y-auto p-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`${
                                message.sender === "user" ? "self-start bg-[#FF5722] px-8 justify-start  text-right" : "self-end bg-[#A52A2A]"
                            } text-white  px-4 py-2 rounded-full max-w-[70%]`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="relative mt-4">
                    <input
                        type="text"
                        placeholder="Message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="w-full px-4 py-2 pr-12 border border-[#001F54] rounded-full focus:outline-none placeholder:text-[#001F54]"
                    />
                    <button
                        onClick={handleSend}
                        className="absolute right-2 top-1   text-white rounded-full p-1 hover:bg-[#FF5722] "
                    >
                        <img src={SendIcon} alt="Send Icon" className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
