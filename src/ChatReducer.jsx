// export default function ChatsReducer(chats, action) {
//   switch (action.type) {
//     case 'addMessage': {
//       return chats.map(chat => { 
//         if (chat.chatID === action.chatID) 
//           { return {
//              ...chat,
//               messages: [...chat.messages, action.message] 
//             }; 
//           }
//       })
//     }
//     case 'addReply':{
//       return chats.map(chat => { 
//         if (chat.chatID === action.chatID) 
//           { return {
//              ...chat,
//               responses: [...chat.responses, action.response] 
//             }; 
//           }
//       })
//     }
//     case 'deleteChat': {
//       return chats.filter((chat) => chat.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

