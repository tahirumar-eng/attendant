import { useState } from "react";
import "./styles.css";
import Modal from "../../components/ui/modal";
import TextInput from "../../components/ui/text_field";
import Table from "../../components/ui/table";
import { useNavigate } from "react-router-dom";

const data = [
  { date: "2021-01-01", status: "Present" },
  { date: "2021-01-02", status: "Absent" },
  { date: "2021-01-03", status: "Present" },
  { date: "2021-01-01", status: "Present" },
  { date: "2021-01-02", status: "Absent" },
  { date: "2021-01-03", status: "Present" },
  { date: "2021-01-01", status: "Present" },
  { date: "2021-01-02", status: "Absent" },
  { date: "2021-01-03", status: "Present" },
  { date: "2021-01-01", status: "Present" },
];

const columns = [
  { label: "Date", field: "date" },
  { label: "Status", field: "status" },
];

const AttendanceRecord = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="attendance_record_container">
      <Modal
        open
        onClose={() => navigate(-1)}
        heading1="Attendance Record"
        heading2="Mehmood Ul Hassan"
        containerClasses="c_modal"
        modalClasses="m_modal"
      >
        <div className="attendance_record_content">
          <div className="search_box">
            <TextInput
              type="search"
              name="query"
              placeholder="Search by Date..."
              value={query}
              onChange={handleChange}
              style={{
                width: "280px",
                height: "60px",
                backgroundColor: "white",
              }}
            />
          </div>
          <div className="attendance_record_table">
            <Table data={data} columns={columns} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AttendanceRecord;
