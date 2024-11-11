import Logo from "../assets/logo.svg";
export function Main() {
  return (
    <div className="chatbot-popup">
      <div className="chat-header">
        <div className="header-info">
          <img src={Logo} alt="" />
          <h2 className="logo-text">Chatbot</h2>
        </div>
      </div>
    </div>
  );
}
