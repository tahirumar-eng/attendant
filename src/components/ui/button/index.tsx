import React, { ButtonHTMLAttributes, CSSProperties } from "react";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties; // Dynamic styles
  label: string; // Button label
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>
  ) => void; // Function to be called on click
  disabled?: boolean; // Disable button
}

const Button: React.FC<ButtonProps> = ({
  style,
  label,
  disabled = false,
  onClick,
  ...restProps
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="btn"
      style={{ ...style }}
      {...restProps}
    >
      {label}
    </button>
  );
};

export default Button;
