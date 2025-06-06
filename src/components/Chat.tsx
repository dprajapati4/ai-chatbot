import type { ReactNode } from "react";

interface ChatProps {
  children: ReactNode;
}

const Chat = ({ children }: ChatProps) => {
  return <div className="chat">{children}</div>;
};

export default Chat;
