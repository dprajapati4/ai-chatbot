import { useState } from "react";
import "./App.css";
import ChatBoxContainer from "./components/ChatBoxContainer";
import Chat from "./components/Chat";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;
    setChatMessages([...chatMessages, inputValue]);
    setInputValue("");
  };

  return (
    <ChatBoxContainer>
      <div>Deep's Chat Box</div>
      <Header />
      <SearchBar
        inputValue={inputValue}
        handleChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Chat>
        {chatMessages.map((message, i) => (
          <div key={i} className="chat-message">
            {message}
          </div>
        ))}
      </Chat>
    </ChatBoxContainer>
  );
}

export default App;
