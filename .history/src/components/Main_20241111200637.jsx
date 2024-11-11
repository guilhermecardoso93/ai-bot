import { Hand, ArrowDown, Laugh } from "lucide-react";
import Logo from "../assets/logo.svg";

export function Main() {
  return (
    <div className="chatbot-popup">
      {/* Header */}
      <div className="chat-header">
        <div className="header-info">
          <img src={Logo} alt="" />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded">
          <ArrowDown />
        </button>
      </div>

      {/* Body */}
      <div className="chat-body">
        <div className="message bot-message">
          <div className="message-text">
            <p className="message-text">
              Hey There
              <Hand />
            </p>
            <p>How can I help you?</p>
          </div>
          <div className="message-user">
            <p className="message-text">
              Lorem Ipsim sfdsailfhjioashdfahsfdiashdfahsuidfasigb
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <form action="" className="chat-form">
          <textarea
            placeholder="Message..."
            className="message-input"
          ></textarea>
          <div className="chat-controls">
            <button className="material-symbols-rounded">
              <Laugh />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
