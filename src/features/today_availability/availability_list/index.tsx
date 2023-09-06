import Card from "../../../components/ui/card";
import "./styles.css";

const listOptions = [
  {
    title: "Present",
    list: ["Noor", "Bilal", "Mehmood"],
  },
  {
    title: "On Leave",
    list: ["Bader", "Shadab", "Asif"],
  },
  {
    title: "Absent",
    list: ["Shahzaib", "Umair", "Farooq"],
  },
];

const AvailabilityList = () => {
  return (
    <div className="availability_list">
      {listOptions.map((item) => (
        <Card classes="item">
          <h2 className="title">{item.title}</h2>
          <ul className="list">
            {item.list.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default AvailabilityList;
