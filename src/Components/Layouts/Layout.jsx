import "./Styles.css";
import SideBar from "../SideBar";
import ChatBox from "../ChatBox/Index.jsx";
import {
  ChatsProvider,
  CurrentChatProvider,
} from "../Context/ConversationContext";
import { useState } from "react";

function Layout() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  return (
    <ChatsProvider>
      <CurrentChatProvider>
        <div className="main-div">
          <SideBar
            className="side-bar"
            isSidebarVisible={isSidebarVisible}
            setSidebarVisible={setSidebarVisible}
          ></SideBar>
          <ChatBox
            className="chat-box"
            isSidebarVisible={isSidebarVisible}
          ></ChatBox>
        </div>
      </CurrentChatProvider>
    </ChatsProvider>
  );
}

export default Layout;
