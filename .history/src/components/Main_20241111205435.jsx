import { Hand, ArrowDown, Laugh, Paperclip, ArrowUp } from "lucide-react";
import Logo from "../assets/logo.svg";

export function Main() {
  return (
    <div className="chatbot-popup">
      {/* Header */}
      <div className="chat-header">
        <div className="header-info">
          <img src={Logo} alt="" className="logo" />
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down" className="bot-avatar"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            <img src={Logo} alt=""  />
            <p className="message-text">
              Hey There 🖐️​
              <br />
              How can I help you?
            </p>
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
