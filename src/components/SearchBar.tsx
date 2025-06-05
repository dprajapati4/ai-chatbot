import Button from "./Button";

// interface SearchBarProps {
//   handleClick: () => {};
// }

const SearchBar = () => {
  return (
    <div>
      <textarea className="search-input" placeholder="Enter your text" />
      <Button
        textContent="Send"
        handleClick={() => {
          alert("Clicked Search");
        }}
      />
    </div>
  );
};

export default SearchBar;
