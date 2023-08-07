/* eslint-disable react/prop-types */
import "./Styles.css";

import DeleteChatButton from "./DeleteChat";
import NewChatButton from "./NewChat";
import { useChats, useCurrentChatId } from "../Context/ConversationContext.jsx";
function SideBar({ isSidebarVisible, setSidebarVisible }) {
  const chats = useChats();
  const currChatId = useCurrentChatId();

  if (isSidebarVisible) {
    return (
      <div className="side-bar ">
        <div>
          <NewChatButton></NewChatButton>
          <button
            className="hide-side-bar"
            onClick={() => setSidebarVisible(!isSidebarVisible)}
          >
            &larr;
          </button>
        </div>
        {chats.length > 0 && (
          <ul className="chat-list">
            {chats
              .slice()
              .reverse()
              .map((chat) => (
                <>
                  <div className="list-item-container">
                    <li
                      key={chat.convId}
                      onClick={() => currChatId.setCurrentChatId(chat.convId)}
                    >
                      {chat.messages[0].text.length !== "" &&
                        chat.messages[0].text}
                    </li>
                    {console.log(currChatId.currentChatId)}
                    <DeleteChatButton />
                  </div>
                </>
              ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="side-bar hidden">
      <button
        className="hide-side-bar"
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      >
        &larr;
      </button>
    </div>
  );
}
export default SideBar;
