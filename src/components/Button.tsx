interface ButtonProps {
  textContent: string;
  handleClick: () => void;
  disabled?: boolean;
}

const Button = ({ textContent, handleClick, disabled }: ButtonProps) => {
  return (
    <button type="submit" onClick={handleClick} disabled={disabled}>
      {textContent}
    </button>
  );
};

export default Button;