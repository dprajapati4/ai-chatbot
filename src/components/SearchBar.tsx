import Button from "./Button";

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
  handleKeyDown
}: SearchBarProps) => {
  return (
    <div>
      <textarea
        className="search-input"
        placeholder="Enter your text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button textContent="Send" handleClick={handleSubmit} />
    </div>
  );
};

export default SearchBar;
