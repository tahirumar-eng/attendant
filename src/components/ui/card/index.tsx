import { CSSProperties, ReactNode } from "react";
import "./styles.css";
interface CardProps {
  style?: CSSProperties;
  children: ReactNode;
  classes?: string;
}
const Card = ({ children, style, classes }: CardProps) => {
  return (
    <div
      className={`card ${classes?.length ? classes : ""}`}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};

export default Card;
