import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from'./components/ChatFeed'


const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="71842685-053a-47f3-8a55-33d922fb73e8"
      userName="jambo"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}


export default App;
