import type { ReactNode } from "react";

interface ChatBoxContainerProps {
  children: ReactNode;
}
const ChatBoxContainer = ({ children }: ChatBoxContainerProps) => {
  return <div className="chatbox-container">{children}</div>;
};

export default ChatBoxContainer;
