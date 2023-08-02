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
    case "addConversation": {
      return [
        ...chats,
        {
          convId: action.id,
          messages: action.messages,
        },
      ];
    }
    case "addMessage": {
      return chats.map((c) => {
        if (c.convId == action.id) {
          return { ...c, messages: [...c.messages, action.message] };
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
      { text: "hi", reply: "hello" },
      { text: "how are you", reply: "i am fine" },
    ],
  },
  {
    convId: 1,
    messages: [
      { text: "halloo", reply: "hiiii" },
      { text: "how ya doin", reply: "great" },
      { text: "coffe?", reply: "" },
    ],
  },
];
