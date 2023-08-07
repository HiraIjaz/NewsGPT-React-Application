import { useChats, useCurrentChatId } from "../Context/ConversationContext";
import "./Styles.css";
import AnimatedText from "./Animatedtext";
function Chat() {
  const conversations = useChats();
  const chatId = useCurrentChatId();

  function getChat(conversation) {
    return (
      <div key={conversation.convId}>
        {console.log(conversations)}
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
  function getWelcome() {
    return (
      <div className="welcome-container">
        <h1 className="welcome-p">NewsGPT</h1>
      </div>
    );
  }
  return (
    <div className="chat-container">
      {conversations.length > 0
        ? getChat(conversations[chatId.currentChatId])
        : getWelcome()}
    </div>
  );
}
export default Chat;
