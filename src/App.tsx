import './App.css'
import ChatBoxContainer from './components/ChatBoxContainer';
import Chat from './components/Chat';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {


  return (
    <ChatBoxContainer>
      <div>
       Deep's Chat Box
      </div>
      <Header/>
      <SearchBar />
      <Chat/>
    </ChatBoxContainer>
   
  )
}

export default App
