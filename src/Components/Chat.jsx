import { useChats, useCurrentChatId } from "./ConversationContext";
import "./Styles.css";
function Chat() {
  const conversations = useChats();
  const chatId = useCurrentChatId();
  function getChat(conversation) {
    return (
      <div key={conversation.convId}>
        {conversation.messages.map((message, index) => (
          <div key={index}>
            <div className="query">
              <img src="src/assets/PersonLogo.png"></img>
              <p>{message.text}</p>
            </div>
            <div className="response">
              <img src="src/assets/Logo.png"></img>
              <p>{message.reply}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="chat-container">
      {getChat(conversations[chatId.currentChatId])}
    </div>
  );
}
export default Chat;
