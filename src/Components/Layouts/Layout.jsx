import "./Styles.css";
import SideBar from "../SideBar";
import ChatBox from "../ChatBox/Index.jsx";

import { useState } from "react";

function Layout() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  return (
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
  );
}

export default Layout;
