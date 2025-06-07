import Button from "./Button";
import TextArea from "./TextArea";
import { FaArrowCircleUp } from "react-icons/fa";

interface SearchBarProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const SearchBar = ({
  inputValue,
  handleChange,
  handleSubmit,
  handleKeyDown,
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
    </div>
  );
};

export default SearchBar;
