interface ChatProps {
  chatMessages: ChatMessage[];
}

type ChatMessage = {
  prompt: string;
  response: string;
};

const Chat = ({ chatMessages }: ChatProps) => {
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
    </div>
  );
};

export default Chat;
