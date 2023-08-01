import { useState } from 'react';
import './ChatBox.css'
//import chatReducer from './ChatReducer';

function ChatBox(){
  const [message,setMesssage ]= useState("");
  // eslint-disable-next-line no-unused-vars
  //const [chats, dispatch] = useReducer(chatReducer, '');
  
  
  return (
    <>
      <div className='message-input'>
        <input className='input'
        placeholder="write here"
        value={message}
        onChange={e=> setMesssage(e.target.value)}
        />
        <button className='btn'
          onClick={ ()=>{
            setMesssage('')
          }}> send
        </button>
      </div>
    </>
    )
}
export default ChatBox;