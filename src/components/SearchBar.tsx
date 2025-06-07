import Button from "./Button";
import TextArea from "./TextArea";
import { FaArrowCircleUp, FaRegTrashAlt } from "react-icons/fa";

interface SearchBarProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleClearChat: () => void;
}

const SearchBar = ({
  inputValue,
  handleChange,
  handleSubmit,
  handleKeyDown,
  handleClearChat,
}: SearchBarProps) => {
  return (
    <div className="searchbar-container">
      <TextArea
        className="search-input"
        placeholder="Ask me anything"
        inputValue={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        handleClick={handleSubmit}
        ariaLabel="ask"
        disabled={inputValue.length > 0 ? false : true}
      >
        {<FaArrowCircleUp />}
      </Button>
      <Button
        ariaLabel="Clear Chat"
        className="clear-chat-button"
        handleClick={handleClearChat}
      >
        <FaRegTrashAlt />
      </Button>
    </div>
  );
};

export default SearchBar;
