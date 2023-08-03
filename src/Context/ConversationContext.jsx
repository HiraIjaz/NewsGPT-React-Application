/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";

export const ChatsContext = createContext(null);
export const ChatsDispatchContext = createContext(null);
export const CurrentChatIdContext = createContext(null);

export function ChatsProvider({ children }) {
  const [chats, dispatch] = useReducer(chatsReducer, initialConversations);

  return (
    <ChatsContext.Provider value={chats}>
      <ChatsDispatchContext.Provider value={dispatch}>
        {children}
      </ChatsDispatchContext.Provider>
    </ChatsContext.Provider>
  );
}

export function CurrentChatProvider({ children }) {
  const [currentChatId, setCurrentChatId] = useState(0);
  return (
    <CurrentChatIdContext.Provider value={{ currentChatId, setCurrentChatId }}>
      {children}
    </CurrentChatIdContext.Provider>
  );
}
//reducer
function chatsReducer(chats, action) {
  switch (action.type) {
    case "addNewChat": {
      chats = [
        ...chats,
        {
          convId: action.id,
          messages: [{ text: "New Chat", reply: "" }],
        },
      ];
      return (chats = chats.filter((chat) => chat !== null));
    }
    case "addMessage": {
      return chats.map((c) => {
        if (c.convId == action.id) {
          if (c.messages[0].text === "New Chat") {
            return { ...c, messages: [action.message] };
          } else {
            return { ...c, messages: [...c.messages, action.message] };
          }
        } else {
          return c;
        }
      });
    }
    case "deleteConversation": {
      return chats.filter((c) => c.convId !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
export function useChats() {
  return useContext(ChatsContext);
}

export function useChatsDispatch() {
  return useContext(ChatsDispatchContext);
}
export function useCurrentChatId() {
  return useContext(CurrentChatIdContext);
}

// initial conversations
const initialConversations = [
  {
    convId: 0,
    messages: [
      { text: "Hi", reply: "Hello" },
      { text: "How are you", reply: "I am fine" },
    ],
  },
  {
    convId: 1,
    messages: [
      { text: "Halloo", reply: "Hiiii" },
      { text: "How ya doin", reply: "Great" },
      { text: "Coffee?", reply: "NAH" },
    ],
  },
];
