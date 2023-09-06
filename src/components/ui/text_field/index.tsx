import React, { CSSProperties, ChangeEvent } from "react";
import "./styles.css";
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string; // Optional label
  icon?: React.ReactNode; // Dynamic icon
  style?: CSSProperties; // Dynamic styles
  classes?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  label,
  icon,
  style,
  classes,
  ...rest
}) => {
  return (
    <div className="text_input">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input_container">
        {icon && <div className="icon">{icon}</div>}
        <input
          className={`rounded_text_input ${classes ? classes : ""}`}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ ...style }}
          {...rest}
        />
      </div>
    </div>
  );
};

export default TextInput;
