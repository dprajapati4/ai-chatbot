import type { ReactNode } from "react";

interface ChatBoxContainerProps {
  children: ReactNode;
}
const ChatBoxContainer = ({ children }: ChatBoxContainerProps) => {
  return <div className="app-name">{children}</div>;
};

export default ChatBoxContainer;
