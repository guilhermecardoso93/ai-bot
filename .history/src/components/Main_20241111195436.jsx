import Logo from "../assets/logo.svg";
import Arrow from "../assets/arrow.svg";


export function Main() {
  return (
    <div className="chatbot-popup">
      <div className="chat-header">
        <div className="header-info">
          <img src={Logo} alt="" />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded">
        <img src={Arrow} alt="" />

        </button>
      </div>
    </div>
  );
}
