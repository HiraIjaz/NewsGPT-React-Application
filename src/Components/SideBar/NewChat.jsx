import {
  useChats,
  useChatsDispatch,
  useCurrentChatId,
} from "../Context/ConversationContext";
import "./Styles.css";

function NewChatButton() {
  const dispatch = useChatsDispatch();
  const currChatId = useCurrentChatId();
  const chats = useChats();
  const lastChat = chats[chats.length - 1].convId;
  const nextChatId = lastChat + 1;

  return (
    <button
      className="new-chat-button"
      onClick={() => {
        dispatch({
          type: "addNewChat",
          id: nextChatId,
        });

        currChatId.setCurrentChatId(nextChatId);
      }}
    >
      + New Chat
    </button>
  );
}
export default NewChatButton;
