import "./Styles.css";
import NewChatButton from "./NewChat";
import { useChats, useCurrentChatId } from "../Context/ConversationContext.jsx";
function SideBar(isSidebarVisible, setSidebarVisible) {
  const chats = useChats();
  const currChatId = useCurrentChatId();

  return (
    <div className={`side-bar ${isSidebarVisible ? "visible" : "hidden"}`}>
      <div>
        <NewChatButton></NewChatButton>
        <button
          className="hide-side-bar visible"
          onClick={() => setSidebarVisible(!isSidebarVisible)}
        >
          &larr;
        </button>
      </div>
      <ul className="chat-list">
        {chats
          .slice()
          .reverse()
          .map((chat) => (
            <li
              key={chat.convId}
              onClick={() => currChatId.setCurrentChatId(chat.convId)}
            >
              {chat.messages[0].text.length !== "" && chat.messages[0].text}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default SideBar;
