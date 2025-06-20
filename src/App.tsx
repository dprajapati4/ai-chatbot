import Groq from "groq-sdk";
import { useState, useEffect } from "react";
import "./App.css";
import ChatBoxContainer from "./components/ChatBoxContainer";
import Chat from "./components/Chat";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Logo from "./components/Logo";

const groq = new Groq({
  apiKey: import.meta.env.VITE_REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

interface ChatMessage {
  prompt: string;
  response: string;
}
interface AppState {
  inputValue: string;
  chatMessages: ChatMessage[];
  isChatVisible: boolean;
  isHeadersVisible: boolean;
}

function App() {
  const [state, setState] = useState<AppState>(() => {
    const localValue = localStorage.getItem("appState");
    if (localValue === null) {
      return {
        inputValue: "",
        chatMessages: [],
        isChatVisible: false,
        isHeadersVisible: true,
      };
    }
    return JSON.parse(localValue);
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: event.target.value,
    }));
  };

  const noChatPrompt = state.inputValue.trim() === "";

  const handleSubmit = async () => {
    if (noChatPrompt) return;

    const chatPrompt = `You: ${state.inputValue}`;

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are a helpful and friendly chatbot. Please format your responses for clear readability:
              - Use **bold** for important terms, names, and key concepts
              - Create numbered lists for step-by-step information or rankings
              - Use bullet points for general lists
              - Keep paragraphs short and focused
              - Separate different topics with line breaks`,
          },
          {
            role: "user",
            content: state.inputValue,
          },
        ],
        model: "llama3-8b-8192",
      });

      const responseContent =
        chatCompletion.choices[0]?.message?.content || "No response";

      const newChatMessage: ChatMessage = {
        prompt: chatPrompt,
        response: responseContent,
      };

      setState((prevState) => ({
        ...prevState,
        chatMessages: [...prevState.chatMessages, newChatMessage],
        isChatVisible: true,
        isHeadersVisible: false,
        inputValue: "",
      }));
    } catch (error) {
      console.error("Error fetching chat completion:", error);
      const errorMessage = "Error fetching chat completion";
      const newChatMessage: ChatMessage = {
        prompt: chatPrompt,
        response: errorMessage,
      };
      setState((prevState) => ({
        ...prevState,
        chatMessages: [...prevState.chatMessages, newChatMessage],
        isChatVisible: true,
        isHeadersVisible: false,
        inputValue: "",
      }));
    }
  };

  const handleClearChat = () => {
    setState((prevState) => ({
      ...prevState,
      chatMessages: [],
      isChatVisible: false,
      isHeadersVisible: true,
      inputValue: "",
    }));

    localStorage.removeItem("appState");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  const { isHeadersVisible, isChatVisible, inputValue, chatMessages } = state;
  return (
    <ChatBoxContainer>
      <Logo />
      {isHeadersVisible && <Header />}
      {isChatVisible && <Chat chatMessages={chatMessages} />}
      <SearchBar
        inputValue={inputValue}
        handleChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        handleClearChat={handleClearChat}
      />
    </ChatBoxContainer>
  );
}

export default App;
