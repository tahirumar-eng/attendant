import { useCallback, useState } from "react";
import "./styles.css";
import EditRecord from "./edit_record";
import AddRecord from "./add_record";
import ChangeOfficeHours from "./change_office_hours";
import Button from "../../components/ui/button";
import TextInput from "../../components/ui/text_field";
import Table from "../../components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  addUser,
  removeUser,
  selectUsers,
  updateUser,
} from "../signin/authSlice";
const columns = [
  { label: "Fist Name", field: "firstName" },
  { label: "Last Name", field: "lastName" },
  { label: "Position", field: "position" },
  { label: "Email", field: "email" },
  { label: "Total Hrs.", field: "totalHrs" },
  { label: "Daily Average Hrs.", field: "dailyAvgHrs" },
];
export interface Row {
  id: number | string;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
}

const Setting = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const rows = users.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      position: user.position,
      email: user.email,
      totalHrs: user.totalHrs,
      dailyAvgHrs: user.dailyAvgHrs,
    };
  });
  const [changeOfficeHours, setChangeOfficeHours] = useState({
    startTime: "",
    finishTime: "",
    workHours: "",
  });
  const [row, setRow] = useState<Row>({
    id: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
  });
  const [addRow, setAddRow] = useState({
    firstName: "",
    lastName: "",
    position: "",
    department: "",
    email: "",
  });
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCOHOpen, setIsCOHOpen] = useState(false);
  const [query, setQuery] = useState("");
  const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRow((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const resetRow = useCallback(() => {
    setRow({
      id: "",
      firstName: "",
      lastName: "",
      position: "",
      email: "",
    });
  }, []);
  const resetAddRow = useCallback(() => {
    setAddRow({
      firstName: "",
      lastName: "",
      position: "",
      department: "",
      email: "",
    });
  }, []);
  const handleAddRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddRow((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCOHRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeOfficeHours((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleModalClose = () => {
    setIsOpen(false);
    resetRow();
  };
  const handleAddModalClose = () => {
    setIsOpenAdd(false);
    resetAddRow();
  };
  const handleCOHModalClose = () => {
    setIsCOHOpen(false);
    setChangeOfficeHours({
      startTime: "",
      finishTime: "",
      workHours: "",
    });
  };

  const handleEditClick = (row: User) => {
    setRow({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      position: row.position,
      email: row.email,
    });
    setIsOpen(true);
  };
  const handleAddUser = () => {
    const user: User = {
      id: users[users.length - 1].id + 1,
      firstName: addRow.firstName,
      lastName: addRow.lastName,
      position: addRow.position,
      email: addRow.email,
      role: "user",
      needsPinChange: true,
      pincode: "0000",
      totalHrs: 0,
      dailyAvgHrs: 0,
    };
    dispatch(addUser(user));
    alert("User added successfully");
    setIsOpenAdd(false);
    resetAddRow();
  };
  const handleSaveEditClick = () => {
    dispatch(updateUser(row));
    alert("User updated successfully");
    setIsOpen(false);
    resetRow();
  };
  const handleDeleteClick = (id: number) => {
    dispatch(removeUser(id));
    alert("User deleted successfully");
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Actions = (row: any) => {
    return (
      <div className="setting_action">
        <Button
          label="Delete"
          onClick={() => handleDeleteClick(row.id)}
          style={{ backgroundColor: "#dc143b" }}
        />
        <Button
          onClick={() => handleEditClick(row)}
          label="Edit"
          style={{ backgroundColor: "#20dac2" }}
        />
      </div>
    );
  };
  return (
    <div className="setting_container">
      <div className="setting_content">
        <span className="setting_heading">Setting</span>
        <div className="search_box">
          <TextInput
            type="search"
            name="query"
            placeholder="Search Here..."
            value={query}
            onChange={handleQueryChange}
            classes="search_input"
          />
        </div>
        <div className="add_btn">
          <Button
            label="Change Office Hours"
            style={{ backgroundColor: "#20dac2" }}
            onClick={() => setIsCOHOpen(true)}
          />
          <Button
            label="Add"
            style={{ backgroundColor: "#20dac2" }}
            onClick={() => setIsOpenAdd(true)}
          />
        </div>
        <div className="setting_table">
          <Table data={rows} columns={columns} actions={Actions} />
        </div>
      </div>
      {isOpen && (
        <EditRecord
          isOpen={isOpen}
          row={row}
          handleModalClose={handleModalClose}
          onChange={handleRowChange}
          onSaveClick={handleSaveEditClick}
        />
      )}
      {isOpenAdd && (
        <AddRecord
          row={addRow}
          onChange={handleAddRowChange}
          isOpen={isOpenAdd}
          handleModalClose={handleAddModalClose}
          onAddUser={handleAddUser}
        />
      )}
      {isCOHOpen && (
        <ChangeOfficeHours
          isOpen={isCOHOpen}
          row={changeOfficeHours}
          handleModalClose={handleCOHModalClose}
          onChange={handleCOHRowChange}
        />
      )}
    </div>
  );
};

export default Setting;
