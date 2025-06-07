import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  disabled = false,
  ariaLabel,
  size = "medium",
}) => {
  const buttonSize =
    size === "small" ? "2rem" : size === "large" ? "3rem" : "2.5rem";

  return (
    <button
      aria-label={ariaLabel}
      type="submit"
      onClick={handleClick}
      disabled={disabled}
      style={{
        width: buttonSize,
        height: buttonSize,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="button-content">{children}</div>
    </button>
  );
};

export default Button;
