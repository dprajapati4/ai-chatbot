import type { ReactNode } from "react";


// TODO:Update these types

// type Chat = {

// }
// interface ChatProps {
//   content: Chat[];
// }

interface ChatProps {
  children: ReactNode;
}

const Chat = ({children}:ChatProps ) => {
 return <div className="chat">{children}</div>;
};

export default Chat;
