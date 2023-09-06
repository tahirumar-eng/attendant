import { useState } from "react";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextInput from "../../components/ui/text_field";
import Table from "../../components/ui/table";
import { useSelector } from "react-redux";
import { selectUsers } from "../signin/authSlice";
import { getFullName } from "../../app/utils";
import "./styles.css";

const columns = [
  { label: "Name", field: "name" },
  { label: "Total Hrs.", field: "totalHrs" },
  { label: "Daily Average Hrs.", field: "dailyAverageHrs" },
];
const iconStyle = {
  border: "none",
  background: "#26d8c0",
  color: "white",
  borderRadius: "6px",
  fontSize: "30px",
};
const OverallStats = () => {
  const users = useSelector(selectUsers);
  const rows = users.map((user) => {
    return {
      name: getFullName(user),
      totalHrs: "5",
      dailyAverageHrs: "3",
    };
  });
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="overall_stats_container">
      <div className="overall_stats_content">
        <span className="stats_heading">Overall Stats</span>
        <div className="search_box">
          <TextInput
            type="search"
            name="query"
            placeholder="Search Here..."
            value={query}
            onChange={handleChange}
            classes="stats_search_input"
          />
        </div>
        <div className="expand_icon_container">
          <ExpandLessSharpIcon sx={{ ...iconStyle }} />
          <ExpandMoreIcon sx={{ ...iconStyle }} />
        </div>
        <div className="overall_stats_table">
          <Table data={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default OverallStats;
