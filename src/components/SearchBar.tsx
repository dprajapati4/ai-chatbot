import Button from "./Button";

interface SearchBarProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

const SearchBar = ({
  inputValue,
  handleChange,
  handleSubmit,
}: SearchBarProps) => {
  return (
    <div>
      <textarea
        className="search-input"
        placeholder="Enter your text"
        value={inputValue}
        onChange={handleChange}
      />
      <Button textContent="Send" handleClick={handleSubmit} />
    </div>
  );
};

export default SearchBar;
