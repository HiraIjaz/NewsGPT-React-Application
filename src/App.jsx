import './App.css'
import SideBar from './SideBar'
import ChatBox from './ChatBox'

function App() {
  return (
    <>
    <div className = 'main-div'>
    <SideBar className ='side-bar'>
    </SideBar>
    <ChatBox className ='chat-box'></ChatBox>
    </div>
    </> 
  )
}

export default App
