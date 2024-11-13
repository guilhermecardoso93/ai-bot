import { useState } from "react";
import { ArrowDown, Laugh, Paperclip, ArrowUp } from "lucide-react";

export function Main() {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    { content: "Hey There 🖐️​ How can I help you?", sender: "bot-message" },
  ]);

  // Função para lidar com o envio da mensagem do usuário
  function handleOutGoingMessage() {
    const userMessage = messageInput.trim();
    if (userMessage) {
      // Adiciona a mensagem do usuário ao estado
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: userMessage, sender: "user" },
      ]);
      setMessageInput(""); // Limpa o campo de entrada

      // Simula a resposta do bot após 600ms
      setTimeout(() => {
        const botResponse = "I'm here to assist!"; // Simula uma resposta do bot
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: botResponse, sender: "bot-message" },
        ]);
      }, 600);
    }
  }

  // Função para lidar com o evento de pressionar a tecla Enter
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleOutGoingMessage(); // Chama a função de envio da mensagem
    }
  }

  return (
    <div className="chatbot-popup">
      {/* Header */}
      <div className="chat-header">
        <div className="header-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 1024 1024"
            className="logo"
          >
            <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
          </svg>
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded" id="close-chatbot">
          <ArrowDown />
        </button>
      </div>

      {/* Body */}
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-text-box">
              {message.sender === "bot-message" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 1024 1024"
                  className="bot-avatar"
                >
                  <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
                </svg>
              )}
              <p className="message-text">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <form action="" className="chat-form">
          <textarea
            placeholder="Message..."
            className="message-input"
          ></textarea>
          <div className="chat-controls">
            <button type="button" className="material-symbols-rounded">
              <Laugh />
            </button>
            <button type="button" className="material-symbols-rounded">
              <Paperclip />
            </button>
            <button type="button" className="material-symbols-rounded">
              <ArrowUp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
