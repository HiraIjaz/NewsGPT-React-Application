import Layout from "../Components/Layouts/Layout.jsx";
import {
  ChatsProvider,
  CurrentChatProvider,
} from "/src/Components/Context/ConversationContext.jsx";
export default function MainPage() {
  return (
    <ChatsProvider>
      <CurrentChatProvider>
        <Layout></Layout>
      </CurrentChatProvider>
    </ChatsProvider>
  );
}
