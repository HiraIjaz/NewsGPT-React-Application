import "./App.css";
import SideBar from "./Components/SideBar";
import ChatBox from "./Components/ChatBox/box.jsx";
import {
  ChatsProvider,
  CurrentChatProvider,
} from "./Context/ConversationContext";

function App() {
  return (
    <ChatsProvider>
      <CurrentChatProvider>
        <div className="main-div">
          <SideBar className="side-bar"></SideBar>
          <ChatBox className="chat-box"></ChatBox>
        </div>
      </CurrentChatProvider>
    </ChatsProvider>
  );
}

export default App;
