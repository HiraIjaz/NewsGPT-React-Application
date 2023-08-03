import { useChats, useCurrentChatId } from "../Context/ConversationContext";
import "./Styles.css";
import AnimatedText from "./Animatedtext";
function Chat() {
  const conversations = useChats();
  const chatId = useCurrentChatId();

  function getChat(conversation) {
    return (
      <div key={conversation.convId}>
        {conversation.messages[0].reply !== "" &&
          conversation.messages.map((message, index) => (
            <div key={index}>
              <div className="query">
                <img src="src/assets/PersonLogo.png" alt="Person Logo" />
                <p>{message.text}</p>
              </div>
              <div className="response">
                <img src="src/assets/Logo.png" alt="Logo" />
                {index !== conversation.messages.length - 1 ? (
                  <p>{message.reply}</p>
                ) : (
                  <p>
                    <AnimatedText text={message.reply} />
                  </p>
                )}
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
