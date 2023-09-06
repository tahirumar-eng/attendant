import "./styles.css";
interface OptionCardProps {
  title: string;
  classes?: string;
}
const OptionCard = ({ title, classes }: OptionCardProps) => {
  return (
    <div className={`option_card_container ${classes?.length ? classes : ""}`}>
      <div className="option_card_title">{title}</div>
    </div>
  );
};

export default OptionCard;
