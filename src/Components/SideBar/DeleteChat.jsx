import {
  useChats,
  useChatsDispatch,
  useCurrentChatId,
} from "../Context/ConversationContext";

function DeleteChatButton() {
  const chats = useChats();
  const currChatId = useCurrentChatId();
  const dispatch = useChatsDispatch();
  let nextChatId = 0;
  return (
    <button
      className="delete-Chat-Button"
      onClick={() => {
        dispatch({
          type: "deleteChat",
          id: currChatId.currentChatId,
        });
        const remainingChats = chats.filter(
          (chat) => chat.convId !== currChatId.currentChatId
        );
        if (remainingChats.length === 0) {
          nextChatId = 0;
        } else {
          nextChatId = remainingChats[remainingChats.length - 1].convId;
        }
        currChatId.setCurrentChatId(nextChatId);
        console.log(chats);
      }}
    >
      <img src="src/assets/DeleteLog.png" />
    </button>
  );
}
export default DeleteChatButton;
