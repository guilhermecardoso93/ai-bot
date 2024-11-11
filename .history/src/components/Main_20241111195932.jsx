import Logo from "../assets/logo.svg";
import Arrow from "../assets/arrow.svg";
import Hand from "../assets/hand.svg";

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
          <img src={Arrow} alt="" />
        </button>
      </div>

      {/* Body */}
      <div className="chat-body">
        <div className="message bot-message">
          <div className="message-text">
            <span>
              Hey There
              <img src={Hand} alt="" />
            </span>
            <span>How can I help you?</span>
          </div>
          <div className="message-user">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
