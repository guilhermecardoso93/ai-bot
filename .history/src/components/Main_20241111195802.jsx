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
            Hey There 
            <img src={Hand} alt="" />
            <br /> How can I help you?
          </div>
        </div>
      </div>
    </div>
  );
}
