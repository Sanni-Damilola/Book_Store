import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>("");

  const handleInputChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (newMessage.trim() === "") {
      return;
    }
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <div>
      <h1 className="font-extrabold text-xl mb-10">Chat With Sanni</h1>
      <div className="message-container">
        {messages.map((message: any, index: any) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="w-[90%] h-[50px] pl-[10px] text-black"
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button className="ml-2" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
