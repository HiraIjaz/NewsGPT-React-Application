import "./Styles.css";
import NewChatButton from "./NewChat";
import { useEffect, useState } from "react";
import { useChats, useCurrentChatId } from "../../Context/ConversationContext";
function SideBar() {
  const chats = useChats();
  const currChatId = useCurrentChatId();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  useEffect(() => {
    return () => {
      console.log("Side bar component is unmounted. Cleanup here.");
    };
  }, [currChatId.currentChatId]);
  return (
    <div className={`side-bar ${sidebarVisible ? "visible" : "hidden"}`}>
      <div>
        <NewChatButton></NewChatButton>
        <button
          className="hide-side-bar visible"
          onClick={() => setSidebarVisible(!sidebarVisible)}
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
