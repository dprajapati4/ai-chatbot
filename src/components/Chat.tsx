import Button from "./Button";
import { FaRegTrashCan } from "react-icons/fa6";

interface ChatProps {
  chatMessages: ChatMessage[];
  handleClearChat: () => void;
}

type ChatMessage = {
  prompt: string;
  response: string;
};

const Chat = ({ chatMessages, handleClearChat }: ChatProps) => {
  return (
    <div className="chat-container">
      <div className="messages">
        {chatMessages.map((message, i) => (
          <div key={i} className="chat-message">
            <div className="chat-prompt">{message.prompt}</div>
            <div className="chat-response">{message.response}</div>
          </div>
        ))}
      </div>

      <Button ariaLabel="clear chat" size="large" handleClick={handleClearChat}>
        <FaRegTrashCan />
      </Button>
    </div>
  );
};

export default Chat;
