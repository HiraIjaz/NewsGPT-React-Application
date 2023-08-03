/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Styles.css";
import Chat from "./Chat";
import getResponse from "../../APIs/GetResponse";
import {
  useChatsDispatch,
  useCurrentChatId,
} from "../Context/ConversationContext.jsx";

export default function ChatBox({ isSidebarVisible }) {
  const [text, setText] = useState("");
  const dispatch = useChatsDispatch();
  const chatId = useCurrentChatId();
  return (
    <div
      className={!isSidebarVisible ? "container expanded-chatbox" : "container"}
    >
      <div className="message-input">
        <input
          className="input"
          placeholder="write here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            dispatch({
              type: "addMessage",
              id: chatId.currentChatId,
              message: { text: text, reply: getResponse(text) },
            });
            setText("");
          }}
        >
          {" "}
          send
        </button>
      </div>
      <Chat></Chat>
    </div>
  );
}
