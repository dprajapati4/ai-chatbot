interface ChatProps {
  chatMessages: ChatMessage[];
}

type ChatMessage = {
  prompt: string;
  response: string;
};
const formatResponse = (response: string): string => {
  let formatted = response;
  
  // Convert **bold** to HTML strong tags
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convert numbered lists with bold titles to structured HTML
  formatted = formatted.replace(
    /(\d+)\.\s\*\*(.*?)\*\*:\s*(.*?)(?=\n\d+\.|\n\n|$)/gs,
    '<div class="list-item"><span class="item-number">$1.</span><strong class="item-title">$2:</strong><span class="item-description">$3</span></div>'
  );
  
  // Convert simple numbered lists
  formatted = formatted.replace(
    /(\d+)\.\s((?!\*\*).+?)(?=\n\d+\.|\n\n|$)/gs,
    '<div class="simple-list-item"><span class="item-number">$1.</span><span class="item-content">$2</span></div>'
  );
  
  // Convert line breaks to proper paragraphs
  formatted = formatted.replace(/\n\n/g, '</p><p>');
  
  // Wrap in paragraph tags if not already structured
  if (!formatted.includes('<div class="list-item">') && !formatted.includes('<div class="simple-list-item">')) {
    formatted = '<p>' + formatted.replace(/\n/g, '<br>') + '</p>';
  }
  
  // Clean up empty paragraphs
  formatted = formatted.replace(/<p><\/p>/g, '');
  
  return formatted;
};

const Chat = ({ chatMessages }: ChatProps) => {
  return (
    <div className="chat-container">
      <div className="messages">
        {chatMessages.map((message, i) => (
          <div key={i} className="chat-message">
            <div className="chat-prompt">{message.prompt}</div>
            <div 
              className="chat-response" 
              dangerouslySetInnerHTML={{ __html: formatResponse(message.response) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;