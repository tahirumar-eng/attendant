import { ChangeEvent, useState } from "react";
import AvailabilityList from "./availability_list";
import "./styles.css";
import TextInput from "../../components/ui/text_field";

const TodayAvailability = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className="today_availability_container">
      <span className="avaialability_heading">Today's Availability</span>
      <div className="search_box">
        <TextInput
          type="search"
          name="query"
          placeholder="Search Here..."
          value={query}
          onChange={handleChange}
          style={{
            border: "1px solid #01bfa6",
            width: "400px",
            height: "60px",
            backgroundColor: "white",
          }}
        />
      </div>
      <div className="availability_options">
        <AvailabilityList />
      </div>
    </div>
  );
};

export default TodayAvailability;
