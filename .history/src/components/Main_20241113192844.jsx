import { useState } from "react";
import { ArrowDown, Laugh, Paperclip, ArrowUp } from "lucide-react";

export function Main() {
  const [messageInput, setMessageInput] = useState("");

  function createMessageElement(content, classes) {
    const div = document.createElement("div");
    div.className = `message ${classes}`;
    div.innerHTML = `<div class="message-text">${content}</div>`;
    document.querySelector(".chat-body").appendChild(div);
  }

  function handleOutGoingMessage() {
    const userMessage = messageInput.trim();
    if (userMessage) {
      createMessageElement(userMessage, "user-message");
      setMessageInput(""); // Limpa o campo de entrada
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleOutGoingMessage();
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
            <path d="..."></path>
          </svg>
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded" id="close-chatbot">
          <ArrowDown />
        </button>
      </div>

      {/* Body */}
      <div className="chat-body">
        <div className="message bot-message">
          <div className="message-text-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 1024 1024"
              className="bot-avatar"
            >
              <path d="..."></path>
            </svg>
            <p className="message-text">
              Hey There 🖐️​ <br />
              How can I help you?
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <form
          action=""
          className="chat-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <textarea
            placeholder="Message..."
            className="message-input"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
            required
          ></textarea>
          <div className="chat-controls">
            <button type="button" className="material-symbols-rounded">
              <Laugh />
            </button>
            <button type="button" className="material-symbols-rounded">
              <Paperclip />
            </button>
            <button
              type="button"
              className="material-symbols-rounded"
              id="send-message"
              onClick={handleOutGoingMessage}
            >
              <ArrowUp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
