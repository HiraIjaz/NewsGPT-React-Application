/* eslint-disable react-refresh/only-export-components */
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
  const initChat = initialConversations[initialConversations.length - 1].convId;
  const [currentChatId, setCurrentChatId] = useState(initChat);
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
    case "deleteChat": {
      const newchats = chats.filter((c) => c.convId !== action.id);
      return newchats;
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
      {
        text: "Scientists discover a new species of deep-sea creatures off the coast of Australia.",
        reply:
          "New species discoveries are common in the scientific community, especially in unexplored areas like the deep sea.",
      },
      {
        text: "World's largest solar farm inaugurated in a desert region",
        reply:
          "With advancements in solar technology, large-scale solar farms are being established in suitable regions worldwide",
      },
    ],
  },
  {
    convId: 1,
    messages: [
      {
        text: "New study links excessive screen time to increased anxiety levels in teenagers.",
        reply:
          "Numerous studies have shown the correlation between excessive screen time and mental health issues in teenagers.",
      },
      {
        text: "AI-powered medical device receives FDA approval for early cancer detection",
        reply:
          "AI-powered medical devices have been developed and approved for various diagnostic applications, including cancer detection",
      },
      {
        text: "Celebrity's social media account hacked, leading to the spread of false information",
        reply:
          "High-profile social media accounts have been targeted by hackers, leading to the dissemination of false information in the past",
      },
    ],
  },
  {
    convId: 2,
    messages: [{ text: "New Chat", reply: "" }],
  },
];
